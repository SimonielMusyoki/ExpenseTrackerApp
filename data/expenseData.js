import {
    icons,
    COLORS
} from '../constants'
// dummy data
export const confirmStatus = "C"
export const pendingStatus = "P"

export let categoriesData = [
    {
        id: 1,
        name: "Education",
        icon: icons.education_icon,
        color: COLORS.yellow,
        expenses: [
            {
                id: 1,
                title: "Tuition Fee",
                description: "Tuition fee",
                location: "Simoniel tuition center",
                total: 100.00,
                status: pendingStatus
            },
            {
                id: 2,
                title: "Arduino",
                description: "Hardward",
                location: "Simoniel tuition center",
                total: 30.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Javascript Books",
                description: "Javascript books",
                location: "Simoniel Book Store",
                total: 20.00,
                status: confirmStatus
            },
            {
                id: 4,
                title: "Python Books",
                description: "PHP books",
                location: "Simoniel Book Store",
                total: 20.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Nutrition",
        icon: icons.food_icon,
        color: COLORS.lightBlue,
        expenses: [
            {
                id: 5,
                title: "Vitamins",
                description: "Vitamin",
                location: "Simoniel Pharmacy",
                total: 25.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Protein powder",
                description: "Protein",
                location: "Simoniel Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Child",
        icon: icons.baby_car_icon,
        color: COLORS.darkgreen,
        expenses: [
            {
                id: 7,
                title: "Toys",
                description: "toys",
                location: "Simoniel Toy Store",
                total: 25.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Baby Car Seat",
                description: "Baby Car Seat",
                location: "Simoniel Baby Care Store",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 9,
                title: "Pampers",
                description: "Pampers",
                location: "Simoniel Supermarket",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 10,
                title: "Baby T-Shirt",
                description: "T-Shirt",
                location: "Simoniel Fashion Store",
                total: 20.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Beauty & Care",
        icon: icons.healthcare_icon,
        color: COLORS.peach,
        expenses: [
            {
                id: 11,
                title: "Skin Care product",
                description: "skin care",
                location: "Simoniel Pharmacy",
                total: 10.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Lotion",
                description: "Lotion",
                location: "Simoniel Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },
            {
                id: 13,
                title: "Face Mask",
                description: "Face Mask",
                location: "Simoniel Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
            {
                id: 14,
                title: "Sunscreen cream",
                description: "Sunscreen cream",
                location: "Simoniel Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Sports",
        icon: icons.sports_icon,
        color: COLORS.purple,
        expenses: [
            {
                id: 15,
                title: "Gym Membership",
                description: "Monthly Fee",
                location: "Simoniel Gym",
                total: 45.00,
                status: pendingStatus,
            },
            {
                id: 16,
                title: "Gloves",
                description: "Gym Equipment",
                location: "Simoniel Gym",
                total: 15.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 6,
        name: "Clothing",
        icon: icons.cloth_icon,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                title: "T-Shirt",
                description: "Plain Color T-Shirt",
                location: "Simoniel Mall",
                total: 20.00,
                status: pendingStatus,
            },
            {
                id: 18,
                title: "Jeans",
                description: "Blue Jeans",
                location: "Simoniel Mall",
                total: 50.00,
                status: confirmStatus,
            },
        ],
    }
]

const AppData = { confirmStatus, pendingStatus, categoriesData };

export default AppData;