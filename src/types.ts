export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}

export type PostsDataType = {
    id: number
    author: string
    avatarImg: any
    time: string
    message: string
    reactions: number
    comments: number
    shares: number
}

export type FollowedObjType = {
    followed: true
}
