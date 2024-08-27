package com.familyfarmrn

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.os.Bundle;
import android.util.Log
import com.familyfarmrn.KakaoLoginModule.Companion.TAG
import com.kakao.sdk.common.KakaoSdk
import com.kakao.sdk.common.util.Utility

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "FamilyFarmRN"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    KakaoSdk.init(this, resources.getString(R.string.kakao_app_key))
    Log.d(TAG, "key hash : ${Utility.getKeyHash(this)}")
  }
}
