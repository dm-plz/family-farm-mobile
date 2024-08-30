package com.familyfarmrn

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.google.firebase.messaging.RemoteMessage

class FirebaseMessagingSerializer {
    companion object {
        private const val KEY_TOKEN = "token";
        private const val KEY_COLLAPSE_KEY = "collapseKey";
        private const val KEY_DATA = "data";
        private const val KEY_FROM = "from";
        private const val KEY_MESSAGE_ID = "messageId";
        private const val KEY_MESSAGE_TYPE = "messageType";
        private const val KEY_SENT_TIME = "sentTime";
        private const val KEY_TO = "to";
        private const val KEY_TTL = "ttl";
        private const val EVENT_NEW_TOKEN = "messaging_token_refresh";
        private const val EVENT_NOTIFICATION_OPENED = "messaging_notification_opened";
        private const val EVENT_MESSAGE_RECEIVED = "messaging_message_received";

        fun remoteMessageMapToEvent(
            remoteMessageMap: WritableMap, openEvent: Boolean
        ): FirebaseEvent {

            return FirebaseEvent(
                if (openEvent) EVENT_NOTIFICATION_OPENED else EVENT_MESSAGE_RECEIVED,
                remoteMessageMap
            )
        }

        fun remoteMessageToWritableMap(remoteMessage: RemoteMessage): WritableMap {
            val messageMap = Arguments.createMap()
            val dataMap = Arguments.createMap()

            if (remoteMessage.collapseKey != null) {
                messageMap.putString(KEY_COLLAPSE_KEY, remoteMessage.collapseKey)
            }

            if (remoteMessage.from != null) {
                messageMap.putString(KEY_FROM, remoteMessage.from)
            }

            if (remoteMessage.to != null) {
                messageMap.putString(KEY_TO, remoteMessage.to)
            }

            if (remoteMessage.messageId != null) {
                messageMap.putString(KEY_MESSAGE_ID, remoteMessage.messageId)
            }

            if (remoteMessage.messageType != null) {
                messageMap.putString(KEY_MESSAGE_TYPE, remoteMessage.messageType)
            }

            if (remoteMessage.data.isNotEmpty()) {
                val entries: Set<Map.Entry<String?, String?>> = remoteMessage.data.entries
                for ((key, value) in entries) {
                    dataMap.putString(key!!, value)
                }
            }

            messageMap.putMap(KEY_DATA, dataMap)
            messageMap.putDouble(KEY_TTL, remoteMessage.ttl.toDouble())
            messageMap.putDouble(KEY_SENT_TIME, remoteMessage.sentTime.toDouble())

            if (remoteMessage.notification != null) {
                messageMap.putMap(
                    "notification",
                    remoteMessageNotificationToWritableMap(remoteMessage.notification!!)
                )
            }

            return messageMap
        }

        private fun remoteMessageNotificationToWritableMap(
            notification: RemoteMessage.Notification
        ): WritableMap {
            val notificationMap = Arguments.createMap()
            val androidNotificationMap = Arguments.createMap()

            if (notification.title != null) {
                notificationMap.putString("title", notification.title)
            }

            if (notification.titleLocalizationKey != null) {
                notificationMap.putString("titleLocKey", notification.titleLocalizationKey)
            }

            if (notification.titleLocalizationArgs != null) {
                notificationMap.putArray(
                    "titleLocArgs", Arguments.fromJavaArgs(notification.titleLocalizationArgs)
                )
            }

            if (notification.body != null) {
                notificationMap.putString("body", notification.body)
            }

            if (notification.bodyLocalizationKey != null) {
                notificationMap.putString("bodyLocKey", notification.bodyLocalizationKey)
            }

            if (notification.bodyLocalizationArgs != null) {
                notificationMap.putArray(
                    "bodyLocArgs", Arguments.fromJavaArgs(notification.bodyLocalizationArgs)
                )
            }

            if (notification.channelId != null) {
                androidNotificationMap.putString("channelId", notification.channelId)
            }

            if (notification.clickAction != null) {
                androidNotificationMap.putString("clickAction", notification.clickAction)
            }

            if (notification.color != null) {
                androidNotificationMap.putString("color", notification.color)
            }

            if (notification.icon != null) {
                androidNotificationMap.putString("smallIcon", notification.icon)
            }

            if (notification.imageUrl != null) {
                androidNotificationMap.putString("imageUrl", notification.imageUrl.toString())
            }

            if (notification.link != null) {
                androidNotificationMap.putString("link", notification.link.toString())
            }

            if (notification.notificationCount != null) {
                androidNotificationMap.putInt("count", notification.notificationCount!!)
            }

            if (notification.notificationPriority != null) {
                androidNotificationMap.putInt("priority", notification.notificationPriority!!)
            }

            if (notification.sound != null) {
                androidNotificationMap.putString("sound", notification.sound)
            }

            if (notification.ticker != null) {
                androidNotificationMap.putString("ticker", notification.ticker)
            }

            if (notification.visibility != null) {
                androidNotificationMap.putInt("visibility", notification.visibility!!)
            }

            notificationMap.putMap("android", androidNotificationMap)
            return notificationMap
        }

        fun newTokenToTokenEvent(newToken: String): FirebaseEvent {
            val eventBody = Arguments.createMap()
            eventBody.putString(KEY_TOKEN, newToken)
            return FirebaseEvent(EVENT_NEW_TOKEN, eventBody)
        }
    }


}