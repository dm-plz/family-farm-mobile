package com.familyfarmrn

import com.facebook.react.bridge.*
import com.google.firebase.messaging.FirebaseMessaging

class FirebaseMessagingModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val TAG = "FirebaseMessagingModule"
    }

    override fun getName(): String {
        return "FirebaseMessagingModule"
    }

    @ReactMethod
    fun getToken(promise: Promise) {
        FirebaseMessaging.getInstance().token.addOnCompleteListener { task ->
            if (task.isSuccessful) {
                promise.resolve(task.result)
                FirebaseEventEmitter.sendEvent(FirebaseMessagingSerializer.newTokenToTokenEvent("123123"))
            } else {
                promise.reject("NO_ACTIVITY", "Current activity is null.")
            }
        }
    }
}