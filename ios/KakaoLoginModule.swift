//
//  RNKakaoLogins.swift
//  RNKakaoLogins
//
//  Created by hyochan on 2021/03/18.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation

import KakaoSDKCommon
import KakaoSDKAuth
import KakaoSDKUser

@objc(KakaoLoginModule)
class KakaoLoginModule: NSObject {

    public override init() {
        let appKey: String? = Bundle.main.object(forInfoDictionaryKey: "KAKAO_APP_KEY") as? String
        print("The value of the variable is \(appKey ?? "1")")
        let customScheme: String? = Bundle.main.object(forInfoDictionaryKey: "KAKAO_APP_SCHEME") as? String
        if (customScheme != nil) {
            KakaoSDK.initSDK(appKey: appKey!, customScheme: customScheme!)
        } else {
            KakaoSDK.initSDK(appKey: appKey!)
        }
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
      return true
    }

    @objc(isKakaoTalkLoginUrl:)
    public static func isKakaoTalkLoginUrl(url:URL) -> Bool {

        let appKey = try? KakaoSDK.shared.appKey();

        if (appKey != nil) {
            return AuthApi.isKakaoTalkLoginUrl(url)
        }
        return false
    }

    @objc(handleOpenUrl:)
    public static func handleOpenUrl(url:URL) -> Bool {
        return AuthController.handleOpenUrl(url: url)
    }

    @objc(signInWithKakao:rejecter:)
    func signInWithKakao(_ resolve: @escaping RCTPromiseResolveBlock,
                rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        DispatchQueue.main.async {
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss";

            if (UserApi.isKakaoTalkLoginAvailable()) {
                UserApi.shared.loginWithKakaoTalk {(oauthToken, error) in
                    if let error = error {
                        reject("RNKakaoLogins", error.localizedDescription, nil)
                    }
                    else {
                        resolve(oauthToken?.idToken ?? "")
                    }
                }
            } else {
                UserApi.shared.loginWithKakaoAccount {(oauthToken, error) in
                    if let error = error {
                        reject("RNKakaoLogins", error.localizedDescription, nil)
                    }
                    else {
                        resolve(oauthToken?.idToken ?? "");
                    }
                }
            }
        }
    }

    @objc(loginWithKakaoAccount:rejecter:)
    func loginWithKakaoAccount(_ resolve: @escaping RCTPromiseResolveBlock,
                rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        DispatchQueue.main.async {
                    let dateFormatter = DateFormatter()
                    dateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss";
            UserApi.shared.loginWithKakaoAccount {(oauthToken, error) in
                if let error = error {
                    reject("RNKakaoLogins", error.localizedDescription, nil)
                }
                else {
                    resolve([
                        "accessToken": oauthToken?.accessToken ?? "",
                        "refreshToken": oauthToken?.refreshToken ?? "" as Any,
                        "idToken": oauthToken?.idToken ?? "",
                        "accessTokenExpiresAt": dateFormatter.string(from: oauthToken!.expiredAt),
                        "refreshTokenExpiresAt": dateFormatter.string(from: oauthToken!.refreshTokenExpiredAt),
                        "scopes": oauthToken?.scopes ?? "",
                    ]);
                }
            }
        }
    }
}
