import Foundation

// NOTE: Singleton instance
@objc(FirebaseEventModule)
class FirebaseEventModule: RCTEventEmitter {
  // NOTE: Read only at public level
  private(set) var jsReady: Bool = false
  private(set) var jsListenerCount: Int = 0

  private var jsListeners: [String: Int] = [:]
  private var queuedEvents: [(name: String, body: Any)] = []

  private let jsListenersLock = NSLock()
  private let queuedEventsLock = NSLock()

  @objc static var shared: FirebaseEventModule?

  override init() {
    super.init()
    FirebaseEventModule.shared = self
  }

  override func invalidate() {
    jsReady = false
    jsListeners = [:]
    queuedEvents = []
    jsListenerCount = 0
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func supportedEvents() -> [String]! {
    return Array(jsListeners.keys)
  }

  func notifyJsReady(_ ready: Bool) {
    jsReady = ready
    if jsReady {
      for (name, body) in queuedEvents {
        sendEvent(withName: name, body: body)
      }
    }
  }

  @objc override func sendEvent(withName name: String, body: Any) {

    if bridge != nil && isObserving() && jsListeners[name] != nil {
      bridge.enqueueJSCall("RCTDeviceEventEmitter.emit", args: [name, body])
    } else {
      queuedEventsLock.lock()

      queuedEvents.append((name, body))

      queuedEventsLock.unlock()
    }
  }

  override func addListener(_ name: String!) {
    jsListenersLock.lock()

    jsListenerCount += 1

    if jsListeners[name] == nil {
      jsListeners[name] = 1
    } else {
      jsListeners[name] = jsListeners[name]! + 1
    }

    queuedEventsLock.lock()

    queuedEvents.removeAll { (_name, body) in
      if _name == name {
        sendEvent(withName: name, body: body)
        return true
      }
      return false
    }

    queuedEventsLock.unlock()

    jsListenersLock.unlock()
  }

  func removeListeners(name: String, all: Bool) {
    jsListenersLock.lock()

    if jsListeners[name] != nil {
      let listenerForEvent = jsListeners[name]!

      if listenerForEvent <= 1 || all {
        jsListeners.removeValue(forKey: name)
      } else {
        jsListeners[name]! -= 1
      }

      self.jsListenerCount -= all ? listenerForEvent : 1
    }

    jsListenersLock.unlock()
  }

  private func isObserving() -> Bool {
    return jsReady && jsListenerCount > 0
  }
}
