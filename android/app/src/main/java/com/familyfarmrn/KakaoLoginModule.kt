package com.familyfarmrn

import android.util.Log
import com.facebook.react.bridge.*
import com.kakao.sdk.auth.model.OAuthToken
import com.kakao.sdk.common.model.AuthError
import com.kakao.sdk.common.model.ClientError
import com.kakao.sdk.common.model.ClientErrorCause
import com.kakao.sdk.user.UserApiClient

class KakaoLoginModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        const val TAG = "KakaoLoginModule"
    }

    override fun getName(): String {
        return "KakaoLoginModule"
    }

    @ReactMethod
    fun signInWithKakao(promise: Promise) {
        val currentActivity = currentActivity ?: run {
            promise.reject("NO_ACTIVITY", "Current activity is null.")
            return
        }

        val callback: (OAuthToken?, Throwable?) -> Unit = { token, error ->
            if (error != null) {
                val errorReason = when (error) {
                    is ClientError -> "Client Error"
                    is AuthError -> "Auth Error"
                    else -> "Unknown Error"
                }
                promise.reject("SIGN_IN_FAIL", errorReason)
            } else if (token != null) {
                promise.resolve(token.idToken)
            }
        }

        if (UserApiClient.instance.isKakaoTalkLoginAvailable(currentActivity)) {
            UserApiClient.instance.loginWithKakaoTalk(currentActivity) { token, error ->
                Log.d(TAG, "loginWithKakaoTalk")
                Log.d(TAG, token.toString())
                if (error != null) {
                    // NOTE: 사용자가 카카오톡 설치 후 디바이스 권한 요청 화면에서 로그인을 취소한 경우,
                    // NOTE: 의도적인 로그인 취소로 보고 카카오계정으로 로그인 시도 없이 로그인 취소로 처리 (예: 뒤로 가기)
                    if (error is ClientError && error.reason == ClientErrorCause.Cancelled) {
                        promise.reject("LOGIN_CANCELLED", "User cancelled KakaoTalk login")
                        return@loginWithKakaoTalk
                    }

                    // NOTE: 카카오톡에 연결된 카카오계정이 없는 경우, 카카오계정으로 로그인 시도
                    UserApiClient.instance.loginWithKakaoAccount(currentActivity, callback = callback)
                } else if (token != null) {
                    promise.resolve(token.idToken)
                }
            }
        } else {
            Log.d(TAG, "loginWithKakaoAccount")
            UserApiClient.instance.loginWithKakaoAccount(currentActivity, callback = callback)
        }
    }
}

