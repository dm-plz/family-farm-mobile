import AuthenticationServices

@objc(AppleLoginModule)
class AppleLoginModule: NSObject {
    
  var resolve: RCTPromiseResolveBlock?
  var reject: RCTPromiseRejectBlock?
  
  @objc func loginWithApple(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    self.resolve = resolve
    self.reject = reject
    
    let appleIDProvider = ASAuthorizationAppleIDProvider()
    let request = appleIDProvider.createRequest()
    request.requestedScopes = [.fullName, .email]
    
    let authorizationController = ASAuthorizationController(authorizationRequests: [request])
    authorizationController.delegate = self
    authorizationController.performRequests()
  }
}

extension AppleLoginModule: ASAuthorizationControllerDelegate {
  func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
      if let appleIDCredential = authorization.credential as? ASAuthorizationAppleIDCredential {
        let userIdentifier = appleIDCredential.user
        let fullName = appleIDCredential.fullName
        let email = appleIDCredential.email
        let idToken = appleIDCredential.identityToken
          
        let user = ["userIdentifier": userIdentifier, "fullName": fullName?.givenName, "email": email, "idToken": String(data: idToken!, encoding: .utf8)]
        resolve?(user)
      } else {
          reject?("Error", "Failed to get AppleID credentials", nil)
      }
  }
  
  func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
      reject?("Error", "AppleID login failed", error)
  }
  
  func handleAppleIDCredential(_ credential: ASAuthorizationAppleIDCredential) {
      // identityToken을 Data에서 String으로 변환
      if let identityTokenData = credential.identityToken {
          // identityToken을 Base64로 인코딩된 String으로 변환
          let identityTokenString = String(data: identityTokenData, encoding: .utf8)
          
          if let token = identityTokenString {
              print("JWT Token: \(token)")
          } else {
              print("identityToken을 String으로 변환하는 데 실패했습니다.")
          }
      } else {
          print("identityToken이 없습니다.")
      }
  }
}
