import FirebaseMessaging

@objc(FirebaseMessagingModule)
class FirebaseMessagingModule: NSObject {
  
  @objc func getToken(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    Messaging.messaging().token { token, error in
      if let error = error {
        reject("FCM Token Error", error.localizedDescription, error)
      } else if let token = token {
        resolve(token)
      }
    }
  }
  
  @objc func eventsNotifyReady(_ ready: Bool) {
    FirebaseEventModule.shared?.notifyJsReady(ready)
  }
  
  @objc func eventsAddListener(_ eventName: String) {
    FirebaseEventModule.shared?.addListener(eventName)
  }
  
  @objc func eventsRemoveListener(_ eventName: String, all: Bool) {
    FirebaseEventModule.shared?.removeListeners(name: eventName, all: all)
  }
}
