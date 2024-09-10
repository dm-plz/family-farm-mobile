protocol NativeEvent {
    func getEventName() -> String
    func getEventBody() -> [String: Any]
}

class FirebaseEvent: NativeEvent {
    private let eventName: String
    private let eventBody: [String: Any]

    init(eventName: String, eventBody: [String: Any]) {
        self.eventName = eventName
        self.eventBody = eventBody
    }

    func getEventName() -> String {
        return self.eventName
    }

    func getEventBody() -> [String: Any] {
        return self.eventBody
    }
}
