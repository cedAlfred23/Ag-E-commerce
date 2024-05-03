export interface AuthModel {
    access: string
    refresh?: string
  }
  
  export interface UserAddressModel {
    addressLine: string
    city: string
    state: string
    postCode: string
  }
  
//   export interface UserCommunicationModel {
//     email: boolean
//     sms: boolean
//     phone: boolean
//   }
  
//   export interface UserEmailSettingsModel {
//     emailNotification?: boolean
//     sendCopyToPersonalEmail?: boolean
//     activityRelatesEmail?: {
//       youHaveNewNotifications?: boolean
//       youAreSentADirectMessage?: boolean
//       someoneAddsYouAsAsAConnection?: boolean
//       uponNewOrder?: boolean
//       newMembershipApproval?: boolean
//       memberRegistration?: boolean
//     }
//     updatesFromKeenthemes?: {
//       newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
//       tipsOnGettingMoreOutOfKeen?: boolean
//       thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
//       newsAboutStartOnPartnerProductsAndOtherServices?: boolean
//       tipsOnStartBusinessProducts?: boolean
//     }
//   }
  
//   export interface UserSocialNetworksModel {
//     linkedIn: string
//     facebook: string
//     twitter: string
//     instagram: string
//   }
  
  export interface UserModel {
    id: number,
    username: string,
    email: string,
    "profile_picture": null,
    "grade": "A",
    "function": "Function 1",
    "service_direction": "Direction 1",
    "is_staff": true,
    "is_active": true,
    "is_superuser": true
  }
  