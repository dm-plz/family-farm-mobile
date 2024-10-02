package com.familyfarmrn

import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class FirebaseMessagingService : FirebaseMessagingService() {
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        // Handle FCM messages here.
        Log.d("MyFirebaseMsgService", "From: ${remoteMessage.from}")

        // Check if message contains a data payload.
        remoteMessage.data.isNotEmpty().let {
            Log.d("MyFirebaseMsgService", "Message data payload: ${remoteMessage.data}")
        }

        // Check if message contains a notification payload.
        remoteMessage.notification?.let {
            Log.d("MyFirebaseMsgService", "Message Notification Body: ${it.body}")
        }

        FirebaseEventEmitter.sendEvent(
            FirebaseMessagingSerializer.remoteMessageMapToEvent(
                FirebaseMessagingSerializer.remoteMessageToWritableMap(remoteMessage),
                true
            )
        )
    }

    override fun onNewToken(token: String) {

        FirebaseEventEmitter.sendEvent(FirebaseMessagingSerializer.newTokenToTokenEvent(token));
        Log.d("MyFirebaseMsgService", "Refreshed token: $token")
        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side,
        // send the Instance ID token to your app server.
    }

    override fun onCreate() {
        super.onCreate()
        Log.d("MyFirebaseMsgService", "Service started")
    }
}