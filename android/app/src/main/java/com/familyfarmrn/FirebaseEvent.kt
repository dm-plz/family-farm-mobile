package com.familyfarmrn

import com.facebook.react.bridge.WritableMap

class FirebaseEvent(private val eventName: String,
                    private val eventBody: WritableMap,
                    private val firebaseAppName: String? = null): NativeEvent {


    override fun getEventName(): String {
        return this.eventName
    }

    override fun getEventBody(): WritableMap {
        return this.eventBody
    }

    override fun getFirebaseAppName(): String? {
        return this.firebaseAppName
    }
}