import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        propertyInformation: 'Property information',
        apartmentSize: 'Apartment size, m',
        apartmentSizeMessage: 'Apartment size cannot be more than 10000 m',
        howManyLivingRooms: 'How many living rooms?',
        '0 living rooms': '0 living rooms',
        '1 living room': '1 living room',
        '2 living rooms': '2 living rooms',
        '3 living rooms': '3 living rooms',
        '4 living rooms': '4 living rooms',
        '5 living rooms': '5 living rooms',
        '6 living rooms': '6 living rooms',
        '7 living rooms': '7 bedrliving roomsooms',
        '8 living rooms': '8 living rooms',
        '9 living rooms': '9 living rooms',
        '10 living rooms': '10 living rooms',
        '11 living rooms': '11 living rooms',
        '12 living rooms': '12 living rooms',
        howManyBedrooms: 'How many bedrooms?',
        '0 bedrooms': '0 bedrooms',
        '1 bedroom': '1 bedroom',
        '2 bedrooms': '2 bedrooms',
        '3 bedrooms': '3 bedrooms',
        '4 bedrooms': '4 bedrooms',
        '5 bedrooms': '5 bedrooms',
        '6 bedrooms': '6 bedrooms',
        '7 bedrooms': '7 bedrooms',
        '8 bedrooms': '8 bedrooms',
        '9 bedrooms': '9 bedrooms',
        '10 bedrooms': '10 bedrooms',
        '11 bedrooms': '11 bedrooms',
        '12 bedrooms': '12 bedrooms',
        howManyBathrooms: 'How many bathrooms?',
        '0 bathrooms': '0 bathrooms',
        '1 bathroom': '1 bathroom',
        '2 bathrooms': '2 bathrooms',
        '3 bathrooms': '3 bathrooms',
        '4 bathrooms': '4 bathrooms',
        '5 bathrooms': '5 bathrooms',
        '6 bathrooms': '6 bathrooms',
        '7 bathrooms': '7 bathrooms',
        '8 bathrooms': '8 bathrooms',
        '9 bathrooms': '9 bathrooms',
        '10 bathrooms': '10 bathrooms',
        '11 bathrooms': '11 bathrooms',
        '12 bathrooms': '12 bathrooms',
        howManyKitchens: 'How many kitchens?',
        '0 kitchens': '0 kitchens',
        '1 kitchen': '1 kitchen',
        '2 kitchens': '2 kitchens',
        '3 kitchens': '3 kitchens',
        '4 kitchens': '4 kitchens',
        '5 kitchens': '5 kitchens',
        '6 kitchens': '6 kitchens',
        '7 kitchens': '7 kitchens',
        '8 kitchens': '8 kitchens',
        '9 kitchens': '9 kitchens',
        '10 kitchens': '10 kitchens',
        '11 kitchens': '11 kitchens',
        '12 kitchens': '12 kitchens',
        serviceType: 'Service type',
        pricesDescription1: 'Prices have a fixed and a variable rate based on m',
        pricesDescription2: ' If you add extra services, the price will update automatically.',
        Basic: 'Basic',
        Detailed: 'Detailed',
        'Move in/out': 'Move in/out',
        'After builders': 'After builders',
        'After party': 'After party',
        extraServices: 'Extra services',
        'Inside fridge': 'Inside fridge',
        'Inside oven': 'Inside oven',
        'Inside dishwasher': 'Inside dishwasher',
        'Inside washer': 'Inside washer',
        'Inside dryer': 'Inside dryer',
        'Inside microwave': 'Inside microwave',
        'Inside kitchen cabinets': 'Inside kitchen cabinets',
        'Inside windows': 'Inside windows',
        'Tile walls': 'Tile walls',
        howFastQuestion: 'How fast?',
        fastCleanDescription:
          "For a faster clean, select '2x' to reduce a 6-hour clean to 3 hours with two cleaners, or '3x' to reduce it to 2 hours with three cleaners. Subject to availability.",
        recurring: 'Recurring',
        recurringDescription: 'Here you can schedule regular cleaning.',
        howOften: 'How often?',
        'One-time': 'One-time',
        Weekly: 'Weekly',
        'Every 2 weeks': 'Every 2 weeks',
        Monthly: 'Monthly',
        'Custom schedule': 'Custom schedule',
        when: 'When?',
        time: 'Time',
        date: 'Date',
        correctDateMessage: 'Please enter a correct date',
        selectedDateMessage: 'This date has already been selected',
        periodDateMessage: "Change the date range or repeats, as it doesn't cover any selected period",
        changedDateMessage: 'We have changed the last date according to the selected frequency',
        excludedDateMessage: 'This date has already been excluded',
        notIncludedDateMessage: "This date isn't included in the selected cleaning dates",
        fillInAllFieldsMessage: 'Please fill in all fields',
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December',
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday',
        Saturday: 'Saturday',
        Sunday: 'Sunday',
        holidays: 'Holidays',
        numberOfCleans: 'Number of cleans',
        startDate: 'Start date',
        lastDate: 'Last date',
        excludedDates: 'Excluded dates',
        excludedDate: 'Excluded date',
        add: 'Add',
        propertyAddress: 'Property address',
        address: 'Address',
        postalCode: 'Postal code',
        city: 'City',
        province: 'Province',
        instructions: 'Instructions',
        instructionsText: 'Let us know of any additional details to help us provide the best service possible.',
        saveInformationForFuture: 'Save information for future',
        next: 'Next',
        save: 'Save',
        summary: 'Summary',
        howFast: 'How fast',
        offPeakHours: 'Off-peak hours',
        subtotal: 'Subtotal',
        iva: 'IVA',
        total: 'Total',
        copyright: 'Copyright © 2024 SDL - Servicio de limpieza. All rights reserved',
        termsOfUse: 'Terms of Use',
        cookies: 'Cookies',
        privacyPolicy: 'Privacy Policy',
        legalNotice: 'Legal Notice',
        book: 'Book',
        profile: 'Profile',
        emailWasChanged: 'Email was changed',
        weHaveSentConfirmationToNewEmail: 'We have sent a confirmation to your new email',
        personalInfo: 'Personal info',
        addresses: 'Addresses',
        orders: 'Orders',
        settings: 'Settings',
        logOut: 'Log out',
        info: 'Info',
        signUp: 'Sign up',
        name: 'Name',
        surname: 'Surname',
        email: 'Email',
        validEmailMessage: 'Please enter a valid email address',
        mobile: 'Phone nr',
        validMobileMessage: 'Please enter a valid phone number',
        password: 'Password',
        confPassword: 'Confirm password',
        confPasswordMessage: 'Password and Confirm Password must match',
        passwordRequirements: 'The password must contain at least 6 characters. Use only Latin alphabet and numbers',
        createAccount: 'Create an account',
        orSignUpVia: 'Or sign up via',
        iHaveAccount: 'I have an account. Go to',
        weHaveSentConfirmation: 'We have sent a confirmation to your email',
        howDidYouHearAboutUs: 'How did you hear about us?',
        Select: 'Select',
        Friend: 'Friend',
        Neighbour: 'Neighbour',
        goToEmail: 'Go to Email',
        logIn: 'Log in',
        orLogInVia: 'Or log in via',
        iDontHaveAccount: "I don't have an account. Go to",
        youAreLoggedInWith: 'You are logged in with',
        weHaveSentReceipt: 'We have sent a Receipt to your email',
        youAreLoggedIn: 'You are logged in',
        iUnderstandAndAccept: 'I understand and accept',
        theCancellationPolicy: 'The\u00A0Cancellation\u00A0Policy*',
        edit: 'Edit',
        cancel: 'Cancel',
        pay: 'Pay',
        weStriveToReplyWithin15Minutes: 'We strive to reply within 15 minutes between 06:00 and 00:00',
        confirmation: 'Confirmation',
        paid: 'Paid',
        learnCancellationPolicy: 'Cancellation Policy',
        services: 'Services / Tariffs',
        BasicCleaningInfo:
          'Basic cleaning starts with an assessment, followed by systematic dusting, vacuuming, and mopping. The kitchen and bathroom receive special attention, including surface sanitization. After the final touch-ups, we perform a walk-through to ensure our high standards are met, leaving your home in pristine condition.',
        DetailedCleaningInfo:
          'Detailed cleaning takes the BASIC cleaning to the next level, leaving no corner untouched. We meticulously clean and sanitize every surface and crevice in your home. From deep cleaning kitchen appliances to thorough dusting, we ensure that your living space is truly immaculate.',
        MoveinoutCleaningInfo:
          'Designed for transitioning in or out of a home, this service includes a thorough cleaning of all areas, with extra attention to spaces that may have been neglected. We take care of cabinets, appliances, and ensure the entire space is ready for the next chapter.',
        AfterbuildersCleaningInfo:
          'Perfect for post-construction or renovation clean-ups, we tackle the mess and dust left behind by builders, leaving you with a clean and comfortable environment. From cleaning surfaces to removing construction debris, we make your newly built or renovated area shine.',
        AfterpartyCleaningInfo:
          'After a great event, the last thing you want to do is clean up. We handle the cleanup, from removing spills and stains to general tidying up, ensuring every surface is sparkling. Allowing you to wake up to a refreshed and clean home.',
        cancellationPolicy: 'Cancellation Policy',
        cancelOrEditAppointment:
          'You have the flexibility to cancel or modify your appointment without charge within one hour of booking or up to 24 hours before the scheduled time. Any cancellations or modifications outside these timeframes may result in a partial refund.',
        plansCanChange:
          "Recognizing that plans can change, we strive to accommodate our valued customers. Here's a breakdown of our cancellation policy:",
        timeOfCancellationOrEdit: 'Time of Cancellation or Edit',
        refund: 'Refund',
        within1HourOfBooking: 'Within 1 hour of booking',
        fullRefund: 'Full refund',
        over24HoursInAdvance: 'Over 24 hours in advance',
        between24And12HoursInAdvance: '24 to 12 hours in advance',
        partialRefund50: 'Partial refund: 50% of booking value',
        lessThan12HoursInAdvance: 'Less than 12 hours in advance',
        noRefund: 'No refund: 100% of booking value',
        noteOnTiming:
          'Please note that the time of cancellation or editing is calculated based on the start time of your cleaning appointment or the earliest part of the appointment affected by the change.',
        refundProcess: 'Refund Process',
        refundsForCancellations:
          'Refunds for cancellations will be credited to your account with us, providing you the option to use it for a future cleaning service or withdraw it back to your payment card. In case the time you canceled gets booked by another customer, you will receive a refund for that time.',
        exceptionalCircumstances: 'Exceptional Circumstances',
        unforeseenSituations:
          'We understand that unforeseen situations may arise, such as an owner requesting cancellation or difficulties finding keys. In such rare cases, we may offer a full refund. When cancelling, please select the most appropriate reason from the options provided in the app or website. If your reason is not listed, choose "Other" and write it in the text field.',
        clarityAndTransparency:
          'We trust that this policy brings clarity and transparency to your understanding of cancellations and modifications to your cleaning appointments. Should you have any further questions or require assistance, please feel free to contact us. Your satisfaction remains our top priority.',
        faq: 'FAQ',
        question0: 'How long is a typical cleaning service?',
        answer0:
          'The duration of your cleaning service depends on your needs and the condition of your home. Basic cleanings typically require a minimum of 3 hours. For a rough estimate, consider the number of bedrooms in your home as the number of hours needed. For example, 3 bedrooms would require approximately 3 hours.',
        question8: 'Who performs the cleaning?',
        answer8: 'Our professional independent house cleaners handle each job.',
        question1: 'What products are used for cleaning?',
        answer1:
          'We use eco-friendly products by default, but you can request different products when scheduling your cleaning.',
        question9: 'How can I pay for the service?',
        answer9:
          'We accept major credit cards as a form of payment. Please note that a credit card convenience fee applies, and pre-authorization of a credit card is required to confirm appointments. Receipts are emailed after each charge.',
        question2: 'Is tipping required?',
        answer2: 'Tipping is entirely at your discretion.',
        question10: 'Do I need to be present during cleaning?',
        answer10: 'You do not have to be present during cleaning. You can provide entry and lock-up instructions.',
        question3: 'Do I need to provide cleaning supplies?',
        answer3:
          'Our maids come fully equipped with eco-friendly cleaning products. However, we are happy to accommodate your specific product preferences.',
        question11: 'How can I set up regular service?',
        answer11: 'To arrange regular service, please contact us by phone or email.',
        question4: 'Are house cleaning services expensive?',
        answer4:
          "House cleaning services are typically affordable and vary based on your home's size and specific cleaning needs.",
        question12: 'Is laundry included in house cleaning services?',
        answer12: 'Laundry is not included in our services.',
        question5: 'How often should I use house cleaning services?',
        answer5:
          'Most people opt for weekly, biweekly, or monthly services based on their preferences and requirements.',
        question13: "How do I cancel or reschedule a clean if I'm unable to?",
        answer13: "We require 48 hours' notice for cancellations or rescheduling to avoid fees.",
        question6: 'What is the cancellation policy?',
        answer6:
          "We do not have contracts for cleaning services. We simply ask for 48 hours' notice for cancellations or rescheduling. If you cancel within 48 hours, a $70 fee applies. If you cancel within 3 hours of the appointment, it is 50% of the cleaning cost. If you cancel with the cleaner present or if we are locked out, the full price will be charged.",
        question14: 'Do you offer a satisfaction guarantee?',
        answer14:
          'Yes, we aim for your satisfaction. If you have any concerns, please contact us within 24 hours, and we will make arrangements to address them.',
        question7: 'How do I pay for my cleaning services?',
        answer7: 'Payment options include Apple Pay, Mastercard, and Visa.',
        question15: 'Is SDL an insured business?',
        answer15: 'Yes, you are automatically covered by our general liability insurance for your peace of mind.',
        contactUs: 'Contact us',
        text: 'Text',
        submit: 'Submit',
        didntFindQuestion: 'Did not find what you are looking for?',
        contactUsHere: 'Contact us here',
        thankYouMessage: 'Thank you for your message',
        weWillReplyToEmail: 'We will reply to your email',
        ok: 'Ok',
        whatIsSdl:
          'SDL is a new on-demand home cleaning service available 24/7 in and around Marbella where booking is as fast and easy as reserving an Uber. Our user-friendly website and mobile app enable customers to request cleaning services, even on short notice, with just a few clicks.',
        timeIsInvaluable:
          'Time is invaluable, spend it where it truly matters\u00A0- while we take care of the cleaning',
        wellMainrainedHome:
          'A well-maintained home preserves value, presents better, and offers a more pleasant living environment.',
        weDeliverCare:
          'We deliver trustworthy, professional care by employing expert techniques and equipment to ensure an exceptional level of cleanliness. And our commitment to excellence is reflected in our 100% Satisfaction Guarantee.',
        bookNow: 'Book now',
        howItWorks: 'How it works',
        request: 'Request',
        requestCleaning: 'Request cleaning, even on short notice,',
        withClicks: 'with a few clicks on the website or mobile app',
        receiveConfIn15Min: 'Receive confirmation within 15 min',
        enjoy: 'Enjoy',
        spendYourTime: 'Spend your time where it truly matters',
        whyWeStandOut: 'Why we stand out?',
        convenient: 'Convenient',
        convenientDescr: 'Schedule your cleaning service in a few simple steps',
        timeSaving: 'Time saving',
        timeSavingDescr: 'Save valuable time by entrusting us with the cleaning',
        professional: 'Professional',
        professionalDescr: 'Enjoy a professionally cleaned home',
        compliant: 'Compliant',
        compliantDescr: 'Fully compliant with all local regulations',
        reliable: 'Reliable',
        reliableDescr: 'Trustworthy, professional care you can rely on',
        trusted: 'Trusted',
        trustedDescr: 'We provide a 100% Satisfaction Guarantee',
        returningToCleanHome: 'And returning to a clean home feels great',
        start: 'Start',
        hereYouCanCustomizeOrder: 'Here, you can customize your order and see the updated price in real-time.',
        editAddress: 'Edit address',
        newAddress: 'New address',
        noSavedAddresses: "You don't have any saved addresses yet",
        chooseDefaultAddress: 'Choose default address',
        userWithEmail: 'User with email',
        'already exists': 'already exists',
        'not found': 'not found',
        incorrectPassword: 'Incorrect password',
        pricesDependentOnTime: 'Prices are also dependent on time of service, see link to tariffs',
        here: 'here',
        from: 'from',
        tariff: 'Tariff',
        type: 'Type',
        nextCleaning: 'Next cleaning',
        seeFullSchedule: 'See full schedule',
        signUpSuccess: 'You are now signed up',
        personalInfoSaved: 'Your personal info has been saved',
        changesSaved: 'Changes saved.',
        passwordChanged: 'Your password has been changed',
        confirmationEmailSent: 'Confirmation has been sent to your email',
        verifyNewEmail: 'Please verify your new email. We have sent instructions to your new email',
        noCurrentOrdersYet: "You don't have any current orders yet",
        noPastOrdersYet: "You don't have any past orders yet",
        changePassword: 'Change password',
        currentPassword: 'Current password',
        'Current password is incorrect': 'Current password is incorrect',
        newPassword: 'New password',
        confirmNewPassword: 'Confirm new password',
        'is already in use': 'is already in use',
        schedule: 'Schedule',
        typeOfSchedule: 'Type of schedule',
        custom: 'Custom',
        endDate: 'End date',
        startTime: 'Start time',
        nextUpcomingCleaning: 'Next upcoming cleaning',
        cleaning: 'Cleaning',
        happyUsers: 'Happy users',
        service: 'Service',
        paySecure: 'Pay secure',
        withStripe: 'with Stripe',
        current: 'Current',
        past: 'Past',
        awaitingConfirmation: 'Awaiting confirmation',
        duration: 'Duration',
        sendToEmail: 'Send to Email',
        receipt: 'Receipt',
        confirm: 'Confirm',
        confirmed: 'Confirmed',
        paymentInstructions: 'Payment instructions will be emailed 48 hours before the start of service',
        booked: 'Booked',
        notifications: 'Notifications',
        new: 'New',
        archive: 'Archive',
        youDontHaveNewNotifications: "You don't have new notifications",
        youDontHaveAnyNotificationsYet: "You don't have any notifications yet",
        'Cleaning completed': 'Cleaning completed',
        'Request confirmed': 'Request confirmed',
        'Request not confirmed': 'Request not confirmed',
        'Admin will contact you shortly for alternatives': 'Admin will contact you shortly for alternatives',
        rateService: 'Rate service',
        howHappy: 'How happy are you with the service?',
        feedback: 'Feedback',
        rateIt: 'Rate it',
        toBePaid: 'To be paid',
        weAreLookingForCleaner: 'We are looking for a cleaner.',
        pleaseAllow15Min: 'Please allow 15 min for confirmation',
        address1Placeholder: 'Streetname and number',
        address2Placeholder: 'Complex, building, apt. nr',
        downloadMobile: 'Download the mobile app\u00A0- for access anywhere, anytime!',
        scanQr: 'Scan this with your camera',
        yourServiceIsBooked: 'Your requested service is booked.',
        yourEmailConfirmed: 'Your email has been confirmed',
        'Thanks, your email has been successfully verified': 'Thanks, your email has been successfully verified',
        yourEmailNotConfirmed: 'Your email hasn’t been confirmed',
        'The link has expired. Please sign up again': 'The link has expired. Please sign up again',
        emailWasVerified: 'The email address has already been verified',
        pleseContactSupport: 'If you did not do this, please contact our support team',
        iAgree: 'I agree to the',
        termsAndConditions: 'terms and conditions',
        setByUserAgreement: 'as set out by the user agreement',
        cookiePolicy: 'Cookie policy',
        lastUpdated: 'Last updated 15 April, 2024',
        cookie2:
          'This Cookie Policy explains how FIRST LUXURY REALTY MARBELLA SL ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at ',
        cookie3:
          'In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.',
        cookie4: 'What are cookies?',
        cookie5:
          'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.',
        cookie6:
          'Cookies set by the website owner (in this case, FIRST LUXURY REALTY MARBELLA SL) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.',
        cookie7: 'Why do we use cookies?',
        cookie8:
          'We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.',
        cookie9: 'How can I control cookies?',
        cookie10:
          'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.',
        cookie11:
          'The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.',
        cookie12:
          'The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):',
        cookie13: 'Essential website cookies:',
        cookie14:
          'These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.',
        cookie15: 'Name:	__stripe_mid',
        cookie16: 'Purpose:	Fraud prevention and detection',
        cookie17: 'Provider:	.www.sdl24.es',
        cookie18: 'Service:	Stripe ',
        cookie19: 'Type:	http_cookie',
        cookie20: 'Expires in:	11 months 30 days',
        cookie21: 'Name:	m',
        cookie22: "Purpose:	Tracks the user's session for Stripe",
        cookie23: 'Provider:	m.stripe.com',
        cookie24: 'Service:	Stripe ',
        cookie25: 'Type:	server_cookie',
        cookie26: 'Expires in:	1 year 11 months 29 days',
        cookie27: 'Name:	__stripe_sid',
        cookie28: 'Purpose:	Fraud prevention and detection',
        cookie29: 'Provider:	.www.sdl24.es',
        cookie30: 'Service:	Stripe ',
        cookie31: 'Type:	http_cookie',
        cookie32: 'Expires in:	30 minutes',
        cookie33: 'Unclassified cookies:',
        cookie34:
          'These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.',
        cookie35: 'Name:	connect.sid',
        cookie36: 'Provider:	api.sdl24.es',
        cookie37: 'Type:	server_cookie',
        cookie38: 'Expires in:	session',
        cookie39: 'Name:	cleaning',
        cookie40: 'Provider:	www.sdl24.es',
        cookie41: 'Type:	html_session_storage',
        cookie42: 'Expires in:	session',
        cookie43: 'How can I control cookies on my browser?',
        cookie44:
          "As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:",
        cookie45:
          'In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:',
        cookie46: 'Digital Advertising Alliance',
        cookie47: 'Digital Advertising Alliance of Canada',
        cookie48: 'European Interactive Digital Advertising Alliance',
        cookie49: 'What about other tracking technologies, like web beacons?',
        cookie50:
          'Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.',
        cookie51: 'Do you use Flash cookies or Local Shared Objects?',
        cookie52:
          'Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.',
        cookie53:
          'If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the ',
        cookie54:
          'Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.',
        cookie55: 'Do you serve targeted advertising?',
        cookie56:
          'Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.',
        cookie57: 'How often will you update this Cookie Policy?',
        cookie58:
          'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.',
        cookie59: 'The date at the top of this Cookie Policy indicates when it was last updated.',
        cookie60: 'Where can I get further information?',
        cookie61:
          'If you have any questions about our use of cookies or other technologies, please email us at info@sdl24.es or by post to:',
        cookie62: 'Spain',
        cookie63: "This cookie policy was created using Termly's ",
        cookie64:
          ' ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.',
        cookie65: 'View Service Privacy Policy',
        cookie66: 'Website Storage Settings Panel',
        cookie67: '. You can also control Flash Cookies by going to the ',
        cookie68: 'Global Storage Settings Panel',
        cookie69:
          ' and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).',
        cookie70: 'Cookie Consent Manager',
        cookie71: '.',
        legalNotice1: 'The information provided by FIRST LUXURY REALTY MARBELLA SL ("we," "us," or "our") on',
        legalNotice2:
          '(the "Site") and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.',
        privacyPolicy1:
          'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.',
        privacyPolicy2:
          'We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.',
        privacyPolicy3: 'Interpretation and Definitions',
        privacyPolicy4: 'Interpretation',
        privacyPolicy5:
          'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
        privacyPolicy6: 'Definitions',
        privacyPolicy7: 'For the purposes of this Privacy Policy:',
        privacyPolicy8: 'Account',
        privacyPolicy9: 'means a unique account created for You to access our Service or parts of our Service.',
        privacyPolicy10: 'Affiliate',
        privacyPolicy11:
          'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
        privacyPolicy12: 'Company',
        privacyPolicy13:
          '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SDL - SERVICIO DE LIMPIEZA, Carretera de Cadiz, km 176 Centro de Negocios Oasis, local 9 29602 Marbella Málaga.',
        privacyPolicy14: 'Cookies',
        privacyPolicy15:
          'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.',
        privacyPolicy16: 'Country',
        privacyPolicy17: 'refers to: Spain.',
        privacyPolicy18: 'Device',
        privacyPolicy19:
          'means any device that can access the Service such as a computer, a cellphone or a digital tablet.',
        privacyPolicy20: 'Personal Data',
        privacyPolicy21: 'is any information that relates to an identified or identifiable individual.',
        privacyPolicy22: 'Service',
        privacyPolicy23: 'refers to the Website.',
        privacyPolicy24: 'Service Provider',
        privacyPolicy25:
          'means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.',
        privacyPolicy26: 'Third-party Social Media Service',
        privacyPolicy27:
          'refers to any website or any social network website through which a User can log in or create an account to use the Service.',
        privacyPolicy28: 'Usage Data',
        privacyPolicy29:
          'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).',
        privacyPolicy30: 'Website',
        privacyPolicy31: 'refers to SDL24, accessible from',
        privacyPolicy32: 'You',
        privacyPolicy33:
          'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
        privacyPolicy34: 'Collecting and Using Your Personal Data',
        privacyPolicy35: 'Types of Data Collected',
        privacyPolicy36:
          'While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:',
        privacyPolicy37: 'Email address',
        privacyPolicy38: 'First name and last name',
        privacyPolicy39: 'Phone number',
        privacyPolicy40: 'Address, State, Province, ZIP/Postal code, City',
        privacyPolicy41: 'Usage Data is collected automatically when using the Service.',
        privacyPolicy42:
          "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
        privacyPolicy43:
          'When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.',
        privacyPolicy44:
          'We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.',
        privacyPolicy45: 'Information from Third-Party Social Media Services',
        privacyPolicy46:
          'The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:',
        privacyPolicy47:
          "If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.",
        privacyPolicy48:
          "You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.",
        privacyPolicy49: 'Tracking Technologies and Cookies',
        privacyPolicy50:
          'We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:',
        privacyPolicy51: 'Cookies or Browser Cookies.',
        privacyPolicy52:
          'A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.',
        privacyPolicy53: 'Web Beacons.',
        privacyPolicy54:
          'Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).',
        privacyPolicy55:
          'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on TermsFeed website article.',
        privacyPolicy56: 'Necessary / Essential Cookies',
        privacyPolicy57: 'Type: Session Cookies',
        privacyPolicy58: 'Administered by: Us',
        privacyPolicy59:
          'Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.',
        privacyPolicy60: 'Cookies Policy / Notice Acceptance Cookies',
        privacyPolicy61: 'Type: Persistent Cookies',
        privacyPolicy62: 'Purpose: These Cookies identify if users have accepted the use of cookies on the Website.',
        privacyPolicy63: 'Functionality Cookies',
        privacyPolicy64:
          'Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.',
        privacyPolicy66:
          'For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.',
        privacyPolicy67: 'Use of Your Personal Data',
        privacyPolicy68: 'The Company may use Personal Data for the following purposes:',
        privacyPolicy69: 'To provide and maintain our Service',
        privacyPolicy70: ', including to monitor the usage of our Service.',
        privacyPolicy71: 'To manage Your Account:',
        privacyPolicy72:
          'to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.',
        privacyPolicy73: 'For the performance of a contract:',
        privacyPolicy74:
          'the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.',
        privacyPolicy75: 'To contact You:',
        privacyPolicy76:
          "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
        privacyPolicy77: 'To provide You',
        privacyPolicy78:
          'with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.',
        privacyPolicy79: 'To manage Your requests:',
        privacyPolicy80: 'To attend and manage Your requests to Us.',
        privacyPolicy81: 'For business transfers:',
        privacyPolicy82:
          'We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.',
        privacyPolicy83: 'For other purposes:',
        privacyPolicy84:
          'We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.',
        privacyPolicy85: 'We may share Your personal information in the following situations:',
        privacyPolicy86: 'With Service Providers:',
        privacyPolicy87:
          'We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.',
        privacyPolicy88:
          'We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.',
        privacyPolicy89: 'With Affiliates:',
        privacyPolicy90:
          'We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.',
        privacyPolicy91: 'With business partners:',
        privacyPolicy92:
          'We may share Your information with Our business partners to offer You certain products, services or promotions.',
        privacyPolicy93: 'With other users:',
        privacyPolicy94:
          'when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.',
        privacyPolicy95: 'With Your consent:',
        privacyPolicy96: 'We may disclose Your personal information for any other purpose with Your consent.',
        privacyPolicy97: 'Retention of Your Personal Data',
        privacyPolicy98:
          'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.',
        privacyPolicy99:
          'The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.',
        privacyPolicy100: 'Transfer of Your Personal Data',
        privacyPolicy101:
          "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
        privacyPolicy102:
          'Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.',
        privacyPolicy103:
          'The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.',
        privacyPolicy104: 'Delete Your Personal Data',
        privacyPolicy105:
          'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.',
        privacyPolicy106:
          'Our Service may give You the ability to delete certain information about You from within the Service.',
        privacyPolicy107:
          'You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.',
        privacyPolicy108:
          'Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.',
        privacyPolicy109: 'Disclosure of Your Personal Data',
        privacyPolicy110: 'Business Transactions',
        privacyPolicy111:
          'If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.',
        privacyPolicy112: 'Law enforcement',
        privacyPolicy113:
          'Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).',
        privacyPolicy114: 'Other legal requirements',
        privacyPolicy115:
          'The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:',
        privacyPolicy116: 'Comply with a legal obligation',
        privacyPolicy117: 'Protect and defend the rights or property of the Company',
        privacyPolicy118: 'Prevent or investigate possible wrongdoing in connection with the Service',
        privacyPolicy119: 'Protect the personal safety of Users of the Service or the public',
        privacyPolicy120: 'Protect against legal liability',
        privacyPolicy121: 'Security of Your Personal Data',
        privacyPolicy122:
          'The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.',
        privacyPolicy123: "Children's Privacy",
        privacyPolicy124:
          'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.',
        privacyPolicy125:
          "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.",
        privacyPolicy126: 'Links to Other Websites',
        privacyPolicy127:
          "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
        privacyPolicy128:
          'We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.',
        privacyPolicy129: 'Changes to this Privacy Policy',
        privacyPolicy130:
          'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.',
        privacyPolicy131:
          'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
        privacyPolicy132:
          'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
        privacyPolicy133: 'Contact Us',
        privacyPolicy134: 'If you have any questions about this Privacy Policy, You can contact us:',
        privacyPolicy135: 'By email',
        privacyPolicy136: 'By visiting this page on our website',
        privacyPolicy137: 'We use both Session and Persistent Cookies for the purposes set out below:',
        privacyPolicy138: 'Personal Data',
        privacyPolicy139: 'Usage Data',
        termsOfUse1: 'AGREEMENT TO OUR LEGAL TERMS',
        termsOfUse2:
          'We are FIRST LUXURY REALTY MARBELLA SL, doing business as First Luxury Realty Marbella SL and First SL ("Company," "we," "us," "our"), a company registered in Spain at Carretera de Cadiz, km 176 Centro de Negocios Oasis, local 9, Marbella, Málaga 29602. Our VAT number is B72522485.',
        termsOfUse3: 'We operate the website',
        termsOfUse4:
          '(the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").',
        termsOfUse5:
          'You can contact us by email at info@sdl24.es or by mail to Carretera de Cadiz, km 176 Centro de Negocios Oasis, local 9, Marbella, Málaga 29602, Spain.',
        termsOfUse6:
          'These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and FIRST LUXURY REALTY MARBELLA SL, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.',
        termsOfUse7:
          'We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by info@sdl24.es, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.',
        termsOfUse8:
          'The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.',
        termsOfUse9: 'We recommend that you print a copy of these Legal Terms for your records.',
        termsOfUse10: 'TABLE OF CONTENTS',
        termsOfUse11: 'OUR SERVICES',
        termsOfUse12: 'INTELLECTUAL PROPERTY RIGHTS',
        termsOfUse13: 'USER REPRESENTATIONS',
        termsOfUse14: 'USER REGISTRATION',
        termsOfUse15: 'PURCHASES AND PAYMENT',
        termsOfUse16: 'POLICY',
        termsOfUse17: 'PROHIBITED ACTIVITIES',
        termsOfUse18: 'USER GENERATED CONTRIBUTIONS',
        termsOfUse19: 'CONTRIBUTION LICENSE',
        termsOfUse20: 'GUIDELINES FOR REVIEWS',
        termsOfUse21: 'SOCIAL MEDIA',
        termsOfUse22: 'SERVICES MANAGEMENT',
        termsOfUse23: 'PRIVACY POLICY',
        termsOfUse24: 'TERM AND TERMINATION',
        termsOfUse25: 'MODIFICATIONS AND INTERRUPTIONS',
        termsOfUse26: 'GOVERNING LAW',
        termsOfUse27: 'DISPUTE RESOLUTION',
        termsOfUse28: 'CORRECTIONS',
        termsOfUse29: 'DISCLAIMER',
        termsOfUse30: 'LIMITATIONS OF LIABILITY',
        termsOfUse31: 'INDEMNIFICATION',
        termsOfUse32: 'USER DATA',
        termsOfUse33: 'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
        termsOfUse34: 'MISCELLANEOUS',
        termsOfUse35: 'CONTACT US',
        termsOfUse36:
          'The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.',
        termsOfUse37: 'Our intellectual property',
        termsOfUse38:
          'We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").',
        termsOfUse39:
          'Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.',
        termsOfUse40:
          'The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.',
        termsOfUse41: 'Your use of our Services',
        termsOfUse42: 'Subject to your compliance with these Legal Terms, including the ',
        termsOfUse43: ' section below, we grant you a non-exclusive, non-transferable, revocable license to:',
        termsOfUse44: 'access the Services;',
        termsOfUse45:
          'download or print a copy of any portion of the Content to which you have properly gained access.',
        termsOfUse46: 'Solely for your personal, non-commercial use',
        termsOfUse47:
          'Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',
        termsOfUse48:
          'If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: info@sdl24.es. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.',
        termsOfUse49: 'We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.',
        termsOfUse50:
          'Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.',
        termsOfUse51: 'Your submissions',
        termsOfUse52: 'Please review this section and the ',
        termsOfUse53:
          ' section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.',
        termsOfUse54: 'Submissions:',
        termsOfUse55:
          'By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.',
        termsOfUse56: 'You are responsible for what you post or upload:',
        termsOfUse57: 'By sending us Submissions through any part of the Services you:',
        termsOfUse58: 'confirm that you have read and agree with our ',
        termsOfUse59:
          ' and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;',
        termsOfUse60:
          'to the extent permissible by applicable law, waive any and all moral rights to any such Submission;',
        termsOfUse61:
          'warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions;',
        termsOfUse62: 'warrant and represent that your Submissions do not constitute confidential information.',
        termsOfUse63:
          'You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.',
        termsOfUse64:
          'By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.',
        termsOfUse65:
          'If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).',
        termsOfUse66:
          'You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.',
        termsOfUse67: 'We accept the following forms of payment:',
        termsOfUse68:
          'You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Euros.',
        termsOfUse69:
          'You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.',
        termsOfUse70:
          'We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.',
        termsOfUse71: 'Please review our Return Policy posted on the Services prior to making any purchases.',
        termsOfUse72:
          'You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',
        termsOfUse73: 'As a user of the Services, you agree not to:',
        termsOfUse74:
          'Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
        termsOfUse75:
          'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
        termsOfUse76:
          'Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.',
        termsOfUse77: 'Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.',
        termsOfUse78:
          'Use any information obtained from the Services in order to harass, abuse, or harm another person.',
        termsOfUse79: 'Make improper use of our support services or submit false reports of abuse or misconduct.',
        termsOfUse80: 'Use the Services in a manner inconsistent with any applicable laws or regulations.',
        termsOfUse81: 'Engage in unauthorized framing of or linking to the Services.',
        termsOfUse82:
          'Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.',
        termsOfUse83:
          'Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
        termsOfUse84: 'Delete the copyright or other proprietary rights notice from any Content.',
        termsOfUse85: 'Attempt to impersonate another user or person or use the username of another user.',
        termsOfUse86:
          'Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").',
        termsOfUse87:
          'Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.',
        termsOfUse88:
          'Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.',
        termsOfUse89:
          'Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.',
        termsOfUse90:
          "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
        termsOfUse91:
          'Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.',
        termsOfUse92:
          'Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.',
        termsOfUse93: 'Use a buying agent or purchasing agent to make purchases on the Services.',
        termsOfUse94:
          'Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
        termsOfUse95:
          'Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.',
        termsOfUse96: 'Sell or otherwise transfer your profile.',
        termsOfUse97: `The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:`,
        termsOfUse98:
          'The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.',
        termsOfUse99:
          'You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.',
        termsOfUse100:
          'You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.',
        termsOfUse101: 'Your Contributions are not false, inaccurate, or misleading.',
        termsOfUse102:
          'Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.',
        termsOfUse103:
          'Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).',
        termsOfUse104: 'Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.',
        termsOfUse105:
          'Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.',
        termsOfUse106: 'Your Contributions do not violate any applicable law, regulation, or rule.',
        termsOfUse107: 'Your Contributions do not violate the privacy or publicity rights of any third party.',
        termsOfUse108:
          'Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.',
        termsOfUse109:
          'Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.',
        termsOfUse110:
          'Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.',
        termsOfUse111:
          'Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.',
        termsOfUse112:
          'You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).',
        termsOfUse113:
          'By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.',
        termsOfUse114:
          'We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.',
        termsOfUse115:
          'We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.',
        termsOfUse116:
          'We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.',
        termsOfUse117:
          'As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.',
        termsOfUse118:
          'We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.',
        termsOfUse119: 'We care about data privacy and security. Please review our Privacy Policy:',
        termsOfUse120:
          'These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.',
        termsOfUse121:
          'If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.',
        termsOfUse122:
          'We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.',
        termsOfUse123:
          'We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.',
        termsOfUse124:
          'These Legal Terms are governed by and interpreted following the laws of Spain, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. FIRST LUXURY REALTY MARBELLA SL and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Marbella Málaga, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Spain, or in the EU country in which you reside.',
        termsOfUse125: 'Informal Negotiations',
        termsOfUse126:
          'To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.',
        termsOfUse127: 'Binding Arbitration',
        termsOfUse128:
          'Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be Madrid, Spain. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of Spain.',
        termsOfUse129: 'Restrictions',
        termsOfUse130:
          'The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.',
        termsOfUse131: 'Exceptions to Informal Negotiations and Arbitration',
        termsOfUse132:
          'The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.',
        termsOfUse133:
          'There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.',
        termsOfUse134:
          "THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.",
        termsOfUse135:
          'IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.',
        termsOfUse136:
          'You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.',
        termsOfUse137:
          'We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.',
        termsOfUse138:
          'Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.',
        termsOfUse139:
          'These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.',
        termsOfUse140:
          'In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:',
        termsOfUse141:
          'By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Spain and United Kingdom. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Spain and United Kingdom, then through your continued use of the Services, you are transferring your data to Spain and United Kingdom, and you expressly consent to have your data transferred to and processed in Spain and United Kingdom.',
        wantToWorkWithUs: 'Want to work with us?',
        weAreLookingForCleaners: 'We are looking for dedicated cleaners to join our growing team!',
        sdlServiceDescription:
          'SDL is a new, on-demand, 24/7 home cleaning service operating in and around Marbella. Working with us, you will have the flexibility to set your own work hours and radius, adjust your availability in real-time, and receive payment instantly after completing each job. We offer high earning potential through expedited cleanings, non-standard hours, and referrals. SDL is fully compliant, insured, and contributes to social security.',
        seeDetails: 'See details',
        'Payment reminder': 'Payment reminder',
        'Cleaning reminder': 'Cleaning reminder',
        'You have a scheduled service for': 'You have a scheduled service for',
        'Cleaning started': 'Cleaning started',
        'Your scheduled cleaning has started.': 'Your scheduled cleaning has started',
        'In order to proceed with your scheduled service we kindly request that payment be made 48 hours in advance. Kindly see invoice sent to your email.':
          'In order to proceed with your scheduled service we kindly request that payment be made 48 hours in advance. Kindly see invoice sent to your email.',
        'Cleaning cancelled': 'Cleaning cancelled',
        'We regret to inform you that your scheduled cleaning has been cancelled. Rest assured, we are working to find another cleaner and will update you shortly.':
          'We regret to inform you that your scheduled cleaning has been cancelled. Rest assured, we are working to find another cleaner and will update you shortly.',
      },
    },
    es: {
      translation: {
        propertyInformation: 'Información de la propiedad',
        apartmentSize: 'Tamaño del apartamento, m',
        apartmentSizeMessage: 'El tamaño del apartamento no puede ser superior a 10000 m',
        howManyLivingRooms: '¿Cuántas salas de estar?',
        '0 living rooms': '0 salas de estar',
        '1 living room': '1 sala de estar',
        '2 living rooms': '2 salas de estar',
        '3 living rooms': '3 salas de estar',
        '4 living rooms': '4 salas de estar',
        '5 living rooms': '5 salas de estar',
        '6 living rooms': '6 salas de estar',
        '7 living rooms': '7 salas de estar',
        '8 living rooms': '8 salas de estar',
        '9 living rooms': '9 salas de estar',
        '10 living rooms': '10 salas de estar',
        '11 living rooms': '11 salas de estar',
        '12 living rooms': '12 salas de estar',
        howManyBedrooms: '¿Cuántos dormitorios?',
        '0 bedrooms': '0 dormitorios',
        '1 bedroom': '1 dormitorio',
        '2 bedrooms': '2 dormitorios',
        '3 bedrooms': '3 dormitorios',
        '4 bedrooms': '4 dormitorios',
        '5 bedrooms': '5 dormitorios',
        '6 bedrooms': '6 dormitorios',
        '7 bedrooms': '7 dormitorios',
        '8 bedrooms': '8 dormitorios',
        '9 bedrooms': '9 dormitorios',
        '10 bedrooms': '10 dormitorios',
        '11 bedrooms': '11 dormitorios',
        '12 bedrooms': '12 dormitorios',
        howManyBathrooms: '¿Cuántos baños?',
        '0 bathrooms': '0 baños',
        '1 bathroom': '1 baño',
        '2 bathrooms': '2 baños',
        '3 bathrooms': '3 baños',
        '4 bathrooms': '4 baños',
        '5 bathrooms': '5 baños',
        '6 bathrooms': '6 baños',
        '7 bathrooms': '7 baños',
        '8 bathrooms': '8 baños',
        '9 bathrooms': '9 baños',
        '10 bathrooms': '10 baños',
        '11 bathrooms': '11 baños',
        '12 bathrooms': '12 baños',
        howManyKitchens: '¿Cuántas cocinas?',
        '0 kitchens': '0 cocinas',
        '1 kitchen': '1 cocina',
        '2 kitchens': '2 cocinas',
        '3 kitchens': '3 cocinas',
        '4 kitchens': '4 cocinas',
        '5 kitchens': '5 cocinas',
        '6 kitchens': '6 cocinas',
        '7 kitchens': '7 cocinas',
        '8 kitchens': '8 cocinas',
        '9 kitchens': '9 cocinas',
        '10 kitchens': '10 cocinas',
        '11 kitchens': '11 cocinas',
        '12 kitchens': '12 cocinas',
        serviceType: 'Tipo de servicio',
        pricesDescription1: 'Los precios tienen una tarifa fija y una tarifa variable basada en m',
        pricesDescription2: ' Si agregas servicios adicionales, el precio se actualizará automáticamente.',
        Basic: 'Básico',
        Detailed: 'Detallado',
        'Move in/out': 'Entrada/Salida',
        'After builders': 'Limpieza de obra',
        'After party': 'Después de una fiesta',
        extraServices: 'Servicios adicionales',
        'Inside fridge': 'Dentro del refrigerador',
        'Inside oven': 'Dentro del horno',
        'Inside dishwasher': 'Dentro del lavavajillas',
        'Inside washer': 'Dentro de la lavadora',
        'Inside dryer': 'Dentro de la secadora',
        'Inside microwave': 'Dentro del microondas',
        'Inside kitchen cabinets': 'Dentro de los armarios de cocina',
        'Inside windows': 'Cristales',
        'Tile walls': 'Paredes de azulejos',
        howFastQuestion: '¿Qué tan rápido?',
        fastCleanDescription:
          "Para una limpieza más rápida, selecciona '2x' para reducir una limpieza de 6 horas a 3 horas con dos limpiadores, o '3x' para reducirla a 2 horas con tres limpiadores. Sujeto a disponibilidad.",
        recurring: 'Recurrente',
        recurringDescription: 'Aquí puedes programar limpiezas regulares.',
        howOften: '¿Con qué frecuencia?',
        'One-time': 'Una vez',
        Weekly: 'Semanal',
        'Every 2 weeks': 'Cada 2 semanas',
        Monthly: 'Mensual',
        'Custom schedule': 'Programa personalizado',
        when: '¿Cuándo?',
        time: 'Tiempo',
        date: 'Fecha',
        correctDateMessage: 'Por favor, ingresa una fecha correcta',
        selectedDateMessage: 'Esta fecha ya ha sido seleccionada',
        periodDateMessage: 'Cambia el rango de fechas o las repeticiones, ya que no cubre ningún período seleccionado',
        changedDateMessage: 'Hemos cambiado la última fecha según la frecuencia seleccionada',
        excludedDateMessage: 'Esta fecha ya ha sido excluida',
        notIncludedDateMessage: 'Esta fecha no está incluida en las fechas de limpieza seleccionadas',
        fillInAllFieldsMessage: 'Por favor, completa todos los campos',
        January: 'Enero',
        February: 'Febrero',
        March: 'Marzo',
        April: 'Abril',
        May: 'Mayo',
        June: 'Junio',
        July: 'Julio',
        August: 'Agosto',
        September: 'Septiembre',
        October: 'Octubre',
        November: 'Noviembre',
        December: 'Diciembre',
        Monday: 'Lunes',
        Tuesday: 'Martes',
        Wednesday: 'Miércoles',
        Thursday: 'Jueves',
        Friday: 'Viernes',
        Saturday: 'Sábado',
        Sunday: 'Domingo',
        holidays: 'Festivos',
        numberOfCleans: 'Número de limpiezas',
        startDate: 'Fecha de inicio',
        lastDate: 'Última fecha',
        excludedDates: 'Fechas excluidas',
        excludedDate: 'Fecha excluida',
        add: 'Agregar',
        propertyAddress: 'Dirección de la propiedad',
        address: 'Dirección',
        postalCode: 'Código postal',
        city: 'Ciudad',
        province: 'Provincia',
        instructions: 'Instrucciones',
        instructionsText:
          'Por favor, proporciónanos cualquier detalle adicional que pueda ayudarnos a brindar el mejor servicio posible.',
        saveInformationForFuture: 'Guardar información para el futuro',
        next: 'Siguiente',
        save: 'Guardar',
        summary: 'Resumen',
        howFast: '¿Qué tan rápido',
        offPeakHours: 'Horas fuera de temporada',
        subtotal: 'Subtotal',
        iva: 'IVA',
        total: 'Total',
        copyright: 'Copyright © 2024 SDL - Servicio de limpieza. Todos los derechos reservados',
        termsOfUse: 'Términos de uso',
        cookies: 'Cookies',
        privacyPolicy: 'Política de privacidad',
        legalNotice: 'Aviso legal',
        book: 'Reservar',
        profile: 'Perfil',
        emailWasChanged: 'El correo electrónico fue cambiado',
        weHaveSentConfirmationToNewEmail: 'Hemos enviado una confirmación a tu nuevo correo electrónico',
        personalInfo: 'Información personal',
        addresses: 'Direcciones',
        orders: 'Solcitudes',
        settings: 'Configuraciones',
        logOut: 'Cerrar sesión',
        info: 'Información',
        signUp: 'Registrarse',
        name: 'Nombre',
        surname: 'Apellido',
        email: 'Correo electrónico',
        validEmailMessage: 'Por favor, introduce una dirección de correo electrónico válida',
        mobile: 'Número de teléfono',
        validMobileMessage: 'Por favor, ingrese un número de teléfono válido',
        password: 'Contraseña',
        confPassword: 'Confirmar contraseña',
        confPasswordMessage: 'La contraseña y la confirmación de la contraseña deben coincidir',
        passwordRequirements:
          'La contraseña debe contener al menos 6 caracteres. Utiliza solo el alfabeto latino y números',
        createAccount: 'Crear una cuenta',
        orSignUpVia: 'O registrarse a través de',
        iHaveAccount: 'Tengo una cuenta. Ve a',
        weHaveSentConfirmation: 'Hemos enviado una confirmación a tu correo electrónico',
        howDidYouHearAboutUs: '¿Cómo te enteraste de nosotros?',
        Select: 'Seleccionar',
        Friend: 'Amigo',
        Neighbour: 'Vecino',
        goToEmail: 'Ir a correo electrónico',
        logIn: 'Iniciar sesión',
        orLogInVia: 'O iniciar sesión a través de',
        iDontHaveAccount: 'No tengo una cuenta. Ve a',
        youAreLoggedInWith: 'Has iniciado sesión con',
        weHaveSentReceipt: 'Hemos enviado un recibo a tu correo electrónico',
        youAreLoggedIn: 'Has iniciado sesión',
        iUnderstandAndAccept: 'Entiendo y acepto',
        theCancellationPolicy: 'La\u00A0Política\u00A0de\u00A0Cancelación*',
        edit: 'Editar',
        cancel: 'Cancelar',
        pay: 'Pagar',
        weStriveToReplyWithin15Minutes:
          'Nos esforzamos por responder dentro de los 15 minutos entre las 06:00 y las 00:00',
        confirmation: 'Confirmación',
        paid: 'Pagado',
        learnCancellationPolicy: 'Política de Cancelación',
        services: 'Servicios / Tarifas',
        BasicCleaningInfo:
          'La limpieza básica comienza con una evaluación, seguida de un desempolvado, aspirado y fregado sistemático. La cocina y el baño reciben atención especial, incluida la desinfección de superficies. Después de los últimos toques, realizamos un recorrido para asegurarnos de que se cumplan nuestros altos estándares, dejando tu hogar en condiciones impecables.',
        DetailedCleaningInfo:
          'La limpieza detallada lleva la limpieza BÁSICA al siguiente nivel, sin dejar ningún rincón sin tocar. Limpiamos y desinfectamos meticulosamente cada superficie y grieta de tu hogar. Desde la limpieza profunda de electrodomésticos de cocina hasta el desempolvado minucioso, nos aseguramos de que tu espacio vital esté verdaderamente inmaculado.',
        MoveinoutCleaningInfo:
          'Diseñado para la transición dentro o fuera de un hogar, este servicio incluye una limpieza exhaustiva de todas las áreas, con atención especial a espacios que pueden haber sido descuidados. Nos encargamos de los armarios, electrodomésticos y aseguramos que todo el espacio esté listo para el próximo capítulo.',
        AfterbuildersCleaningInfo:
          'Perfecto para limpiezas después de construcciones o renovaciones, abordamos el desorden y el polvo dejado por los constructores, dejándote un entorno limpio y cómodo. Desde la limpieza de superficies hasta la eliminación de escombros de construcción, hacemos que tu área recién construida o renovada brille.',
        AfterpartyCleaningInfo:
          'Después de un gran evento, lo último que quieres hacer es limpiar. Nos encargamos de la limpieza, desde la eliminación de derrames y manchas hasta la limpieza general, asegurando que cada superficie esté reluciente. Permitiéndote despertar en un hogar renovado y limpio.',
        cancellationPolicy: 'Política de cancelación',
        cancelOrEditAppointment:
          'Tienes la flexibilidad de cancelar o modificar tu cita sin cargo dentro de una hora después de reservar o hasta 24 horas antes del horario programado. Cualquier cancelación o modificación fuera de estos plazos puede resultar en un reembolso parcial.',
        plansCanChange:
          'Reconociendo que los planes pueden cambiar, nos esforzamos por acomodar a nuestros valiosos clientes. Aquí tienes un resumen de nuestra política de cancelación:',
        timeOfCancellationOrEdit: 'Tiempo de Cancelación o Edición',
        refund: 'Reembolso',
        within1HourOfBooking: 'Dentro de la primera hora de reserva',
        fullRefund: 'Reembolso completo',
        over24HoursInAdvance: 'Más de 24 horas de anticipación',
        between24And12HoursInAdvance: 'De 24 a 12 horas de anticipación',
        partialRefund50: 'Reembolso parcial: 50% del valor de la reserva',
        lessThan12HoursInAdvance: 'Menos de 12 horas de anticipación',
        noRefund: 'Sin reembolso: 100% del valor de la reserva',
        noteOnTiming:
          'Ten en cuenta que la hora de cancelación o edición se calcula en función de la hora de inicio de tu cita de limpieza o de la parte más temprana de la cita afectada por el cambio.',
        refundProcess: 'Proceso de reembolso',
        refundsForCancellations:
          'Los reembolsos por cancelaciones se acreditarán en tu cuenta con nosotros, brindándote la opción de usarlo para un servicio de limpieza futuro o retirarlo de vuelta a tu tarjeta de pago. En caso de que el tiempo que cancelaste sea reservado por otro cliente, recibirás un reembolso por ese tiempo.',
        exceptionalCircumstances: 'Circunstancias excepcionales',
        unforeseenSituations:
          'Entendemos que pueden surgir situaciones imprevistas, como la solicitud de cancelación por parte del propietario o dificultades para encontrar las llaves. En tales casos raros, podemos ofrecer un reembolso completo. Al cancelar, por favor selecciona la razón más apropiada de las opciones proporcionadas en la aplicación o el sitio web. Si tu razón no está en la lista, elige "Otro" y escríbela en el campo de texto.',
        clarityAndTransparency:
          'Confiamos en que esta política brinde claridad y transparencia a tu comprensión de las cancelaciones y modificaciones de tus citas de limpieza. Si tienes alguna pregunta adicional o necesitas ayuda, no dudes en contactarnos. Tu satisfacción sigue siendo nuestra máxima prioridad.',
        faq: 'Preguntas frecuentes',
        question0: '¿Cuánto dura un servicio típico de limpieza?',
        answer0:
          'La duración de su servicio de limpieza depende de sus necesidades y del estado de su hogar. Las limpiezas básicas generalmente requieren un mínimo de 3 horas. Para una estimación aproximada, considere el número de habitaciones en su hogar como el número de horas necesarias. Por ejemplo, 3 habitaciones requerirían aproximadamente 3 horas.',
        question8: '¿Quién realiza la limpieza?',
        answer8: 'Nuestros limpiadores de casas profesionales e independientes se encargan de cada trabajo.',
        question1: '¿Qué productos se utilizan para la limpieza?',
        answer1:
          'Utilizamos productos ecológicos por defecto, pero puede solicitar diferentes productos al programar su limpieza.',
        question9: '¿Cómo puedo pagar el servicio?',
        answer9:
          'Aceptamos tarjetas de crédito principales como forma de pago. Tenga en cuenta que se aplica una tarifa de conveniencia de tarjeta de crédito, y se requiere la preautorización de una tarjeta de crédito para confirmar las citas. Los recibos se envían por correo electrónico después de cada cargo.',
        question2: '¿Es necesario dar propina?',
        answer2: 'Dar propina queda completamente a su discreción.',
        question10: '¿Necesito estar presente durante la limpieza?',
        answer10:
          'No tiene que estar presente durante la limpieza. Puede proporcionar instrucciones para entrar y cerrar.',
        question3: '¿Necesito proporcionar productos de limpieza?',
        answer3:
          'Nuestras empleadas vienen completamente equipadas con productos de limpieza ecológicos. Sin embargo, estamos encantados de adaptarnos a sus preferencias específicas de productos.',
        question11: '¿Cómo puedo configurar un servicio regular?',
        answer11: 'Para organizar un servicio regular, contáctenos por teléfono o correo electrónico.',
        question4: '¿Son caros los servicios de limpieza de casas?',
        answer4:
          'Los servicios de limpieza de casas son generalmente asequibles y varían según el tamaño de su hogar y sus necesidades específicas de limpieza.',
        question12: '¿La lavandería está incluida en los servicios de limpieza de casas?',
        answer12: 'La lavandería no está incluida en nuestros servicios.',
        question5: '¿Con qué frecuencia debo usar los servicios de limpieza de casas?',
        answer5:
          'La mayoría de las personas optan por servicios semanales, quincenales o mensuales, según sus preferencias y requisitos.',
        question13: '¿Cómo cancelo o reprogramo una limpieza si no puedo?',
        answer13: 'Requerimos 48 horas de aviso para cancelaciones o reprogramaciones para evitar tarifas.',
        question6: '¿Cuál es la política de cancelación?',
        answer6:
          'No tenemos contratos para servicios de limpieza. Simplemente pedimos 48 horas de aviso para cancelaciones o reprogramaciones. Si cancela dentro de las 48 horas, se aplica una tarifa de $70. Si cancela dentro de las 3 horas de la cita, es el 50% del costo de la limpieza. Si cancela con el limpiador presente o si estamos bloqueados, se cobrará el precio completo.',
        auestion14: '¿Ofrecen garantía de satisfacción?',
        answer14:
          'Sí, buscamos su satisfacción. Si tiene alguna inquietud, contáctenos dentro de las 24 horas y haremos arreglos para abordarlas.',
        question7: '¿Cómo pago mis servicios de limpieza?',
        answer7: 'Las opciones de pago incluyen Apple Pay, Mastercard y Visa.',
        question15: '¿Es SDL un negocio asegurado?',
        answer15:
          'Sí, automáticamente está cubierto por nuestro seguro de responsabilidad general para su tranquilidad.',
        contactUs: 'Contáctanos',
        text: 'Mensaje',
        submit: 'Enviar',
        didntFindQuestion: 'No encontraste lo que estás buscando?',
        contactUsHere: 'Contáctenos aquí',
        thankYouMessage: 'Gracias por tu mensaje',
        weWillReplyToEmail: 'Responderemos a tu correo electrónico',
        ok: 'Ok',
        whatIsSdl:
          'SDL es un nuevo servicio de limpieza del hogar a demanda disponible 24/7 en Marbella y sus alrededores, donde reservar es tan rápido y fácil como pedir un Uber. Nuestro sitio web y aplicación móvil, fáciles de usar, permiten a los clientes solicitar servicios de limpieza, incluso con poca antelación, con solo unos pocos clics.',
        timeIsInvaluable:
          'El tiempo es incalculable, gástelo donde realmente importa, mientras nosotros nos encargamos de la limpieza.',
        wellMainrainedHome:
          'Un hogar bien mantenido conserva su valor, se presenta mejor y ofrece un entorno de vida más agradable.',
        weDeliverCare:
          'Ofrecemos servicio profesional de confianza empleando técnicas y equipos expertos para garantizar un nivel excepcional de limpieza. Y nuestro compromiso con la excelencia se refleja en nuestra Garantía de Satisfacción del 100%.',
        bookNow: 'Reservar ahora',
        howItWorks: 'Cómo funciona',
        request: 'Solicitud',
        requestCleaning: 'Solicite limpieza, incluso con poco tuempo de aviso,',
        withClicks: 'con unos pocos clics en el sitio web o en la aplicación móvil',
        receiveConfIn15Min: 'Reciba confirmación en 15 minutos',
        enjoy: 'Disfruta',
        spendYourTime: 'Pasa tu tiempo donde realmente importa',
        whyWeStandOut: '¿Por qué destacamos?',
        convenient: 'Conveniente',
        convenientDescr: 'Programa tu servicio de limpieza en unos simples pasos',
        timeSaving: 'Ahorro de tiempo',
        timeSavingDescr: 'Ahorra tiempo valioso confiándonos la limpieza',
        professional: 'Profesional',
        professionalDescr: 'Disfruta de un hogar limpiado profesionalmente',
        compliant: 'Cumplimiento',
        compliantDescr: 'Totalmente conforme con todas las regulaciones locales',
        reliable: 'Confianza',
        reliableDescr: 'Servicio profesional y de confianza en el que puedes confiar',
        trusted: 'Seguro',
        trustedDescr: 'Ofrecemos una Garantía de Satisfacción del 100%',
        returningToCleanHome: 'Y volver a casa limpia se siente genial',
        start: 'Comenzar',
        hereYouCanCustomizeOrder: 'Aquí, puedes personalizar tu pedido y ver el precio actualizado en tiempo real.',
        editAddress: 'Editar dirección',
        newAddress: 'Nueva dirección',
        noSavedAddresses: 'Todavía no tienes direcciones guardadas',
        chooseDefaultAddress: 'Elegir dirección predeterminada',
        userWithEmail: 'Usuario con ese correo electrónico',
        'already exists': 'ya existe',
        'not found': 'no encontrado',
        incorrectPassword: 'Contraseña incorrecta',
        pricesDependentOnTime: 'Los precios también dependen del tiempo del servicio, consulte el enlace a las tarifas',
        here: 'aquí',
        from: 'desde',
        tariff: 'Tarifa',
        type: 'Tipo',
        nextCleaning: 'Próxima limpieza',
        seeFullSchedule: 'Ver horario completo',
        signUpSuccess: 'Ahora estás registrado',
        personalInfoSaved: 'Tu información personal ha sido guardada',
        changesSaved: 'Cambios guardados.',
        passwordChanged: 'Tu contraseña ha sido cambiada',
        confirmationEmailSent: 'Se ha enviado la confirmación a tu correo electrónico',
        verifyNewEmail:
          'Por favor verifica tu nuevo correo electrónico. Hemos enviado instrucciones a tu nuevo correo electrónico',
        noCurrentOrdersYet: 'Todavía no tienes pedidos actuales',
        noPastOrdersYet: 'Todavía no tienes pedidos anteriores',
        changePassword: 'Cambiar contraseña',
        currentPassword: 'Contraseña actual',
        'Current password is incorrect': 'La contraseña actual es incorrecta',
        newPassword: 'Nueva contraseña',
        confirmNewPassword: 'Confirmar nueva contraseña',
        'is already in use': 'ya está en uso',
        schedule: 'Horario',
        typeOfSchedule: 'Tipo de horario',
        custom: 'Personalizado',
        endDate: 'Fecha de finalización',
        startTime: 'Hora de inicio',
        nextUpcomingCleaning: 'Próxima limpieza programada',
        cleaning: 'Limpieza',
        happyUsers: 'Usuarios felices',
        service: 'Servicio',
        paySecure: 'Pagar de forma segura',
        withStripe: 'con Stripe',
        current: 'Actual',
        past: 'Pasado',
        awaitingConfirmation: 'Esperando confirmación',
        duration: 'Duración',
        sendToEmail: 'Enviar por correo electrónico',
        receipt: 'Recibo',
        confirm: 'Confirmar',
        confirmed: 'Confirmado',
        paymentInstructions:
          'Las instrucciones de pago se enviarán por correo electrónico 48 horas antes del inicio del servicio',
        booked: 'Reservado',
        notifications: 'Notificaciones',
        new: 'Nuevo',
        archive: 'Archivo',
        youDontHaveNewNotifications: 'No tienes nuevas notificaciones',
        youDontHaveAnyNotificationsYet: 'Todavía no tienes ninguna notificación',
        'Cleaning completed': 'Limpieza completada',
        'Request confirmed': 'Solicitud confirmada',
        'Request not confirmed': 'Solicitud no confirmada',
        'Admin will contact you shortly for alternatives':
          'El administrador se pondrá en contacto contigo pronto para ofrecerte alternativas',
        rateService: 'Calificar servicio',
        howHappy: '¿Qué tan contento estás con el servicio?',
        feedback: 'Comentario',
        rateIt: 'Califícalo',
        toBePaid: 'Ser pagado',
        weAreLookingForCleaner: 'Estamos buscando un limpiador.',
        pleaseAllow15Min: 'Por favor, permita 15 minutos para la confirmación',
        address1Placeholder: 'Calle y número',
        address2Placeholder: 'Complejo, edificio, número de apartamento',
        downloadMobile: '¡Descarga la aplicación móvil para acceder en cualquier lugar y en cualquier momento!',
        scanQr: 'Escanea esto con tu cámara',
        yourServiceIsBooked: 'Tu servicio solicitado está reservado.',
        yourEmailConfirmed: 'Tu correo electrónico ha sido confirmado',
        'Thanks, your email has been successfully verified':
          'Gracias, tu correo electrónico ha sido verificado con éxito',
        yourEmailNotConfirmed: 'Tu correo electrónico no ha sido confirmado',
        'The link has expired. Please sign up again': 'El enlace ha expirado. Por favor, regístrate de nuevo',
        emailWasVerified: 'La dirección de correo electrónico ya ha sido verificada',
        pleseContactSupport: 'Si no lo hiciste tú, por favor contacta a nuestro equipo de soporte',
        iAgree: 'Estoy de acuerdo con',
        termsAndConditions: 'los términos y condiciones',
        setByUserAgreement: 'establecidos en el acuerdo del usuario',
        cookiePolicy: 'Política de cookies',
        lastUpdated: 'Última actualización: 15 de abril de 2024',
        cookie2:
          'Esta Política de cookies explica cómo FIRST LUXURY REALTY MARBELLA SL ("Empresa", "nosotros", "nos" y "nuestro") utiliza cookies y tecnologías similares para reconocerle cuando visita nuestro sitio web en ',
        cookie3:
          'En algunos casos, podemos utilizar cookies para recopilar información personal, o que se convierte en información personal si la combinamos con otra información.',
        cookie4: '¿Qué son las cookies?',
        cookie5:
          'Las cookies son pequeños archivos de datos que se colocan en su ordenador o dispositivo móvil cuando visita un sitio web. Las cookies son ampliamente utilizadas por los propietarios de sitios web para hacer que sus sitios web funcionen, o para que funcionen de manera más eficiente, así como para proporcionar información de informes.',
        cookie6:
          'Las cookies establecidas por el titular del sitio web (en este caso, FIRST LUXURY REALTY MARBELLA SL) se denominan "cookies propias". Las cookies establecidas por terceros que no sean el propietario del sitio web se denominan "cookies de terceros". Las cookies de terceros permiten que se proporcionen características o funcionalidades de terceros en o a través del sitio web (por ejemplo, publicidad, contenido interactivo y análisis). Las partes que establecen estas cookies de terceros pueden reconocer su ordenador tanto cuando visita el sitio web en cuestión como cuando visita otros sitios web.',
        cookie7: '¿Por qué utilizamos cookies?',
        cookie8:
          'Utilizamos cookies propias y de terceros por varios motivos. Algunas cookies son necesarias por razones técnicas para que nuestro sitio web funcione, y nos referimos a ellas como cookies "esenciales" o "estrictamente necesarias". Otras cookies también nos permiten rastrear y orientar los intereses de nuestros usuarios para mejorar la experiencia en nuestras Propiedades en línea. Los terceros sirven cookies a través de nuestro sitio web con fines publicitarios, analíticos y de otro tipo. Esto se describe con más detalle a continuación.',
        cookie9: '¿Cómo puedo controlar las cookies?',
        cookie10:
          'Tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus derechos de cookies configurando sus preferencias en el Administrador de consentimiento de cookies. El Administrador de consentimiento de cookies le permite seleccionar qué categorías de cookies acepta o rechaza. Las cookies esenciales no pueden ser rechazadas, ya que son estrictamente necesarias para proporcionarle servicios.',
        cookie11:
          'El Administrador de consentimiento de cookies se puede encontrar en el banner de notificación y en nuestro sitio web. Si decide rechazar las cookies, puede seguir utilizando nuestro sitio web, aunque su acceso a algunas funciones y áreas de nuestro sitio web puede estar restringido. También puede configurar o modificar los controles de su navegador web para aceptar o rechazar las cookies.',
        cookie12:
          'Los tipos específicos de cookies propias y de terceros que se sirven a través de nuestro sitio web y los fines que realizan se describen en la siguiente tabla (tenga en cuenta que las cookies específicas que se sirven pueden variar según las propiedades en línea específicas que visite):',
        cookie13: 'Cookies esenciales del sitio web:',
        cookie14:
          'Estas cookies son estrictamente necesarias para proporcionarle servicios disponibles a través de nuestro Sitio web y para utilizar algunas de sus funciones, como el acceso a áreas seguras.',
        cookie15: 'Nombre: __stripe_mid',
        cookie16: 'Propósito: Prevención y detección de fraudes',
        cookie17: 'Proveedor: .www.sdl24.es',
        cookie18: 'Servicio: Stripe ',
        cookie19: 'Tipo: http_cookie',
        cookie20: 'Caduca en: 11 meses 30 días',
        cookie21: 'Nombre: m',
        cookie22: 'Propósito: Seguir la sesión del usuario para Stripe',
        cookie23: 'Proveedor: m.stripe.com',
        cookie24: 'Servicio: Stripe ',
        cookie25: 'Tipo: server_cookie',
        cookie26: 'Caduca en: 1 año 11 meses 29 días',
        cookie27: 'Nombre: __stripe_sid',
        cookie28: 'Propósito: Prevención y detección de fraudes',
        cookie29: 'Proveedor: .www.sdl24.es',
        cookie30: 'Servicio: Stripe ',
        cookie31: 'Tipo: http_cookie',
        cookie32: 'Caduca en: 30 minutos',
        cookie33: 'Cookies no clasificadas:',
        cookie34:
          'Estas son cookies que aún no han sido categorizadas. Estamos en proceso de clasificar estas cookies con la ayuda de sus proveedores.',
        cookie35: 'Nombre: connect.sid',
        cookie36: 'Proveedor: api.sdl24.es',
        cookie37: 'Tipo: server_cookie',
        cookie38: 'Caduca en: sesión',
        cookie39: 'Nombre: cleaning',
        cookie40: 'Proveedor: www.sdl24.es',
        cookie41: 'Tipo: html_session_storage',
        cookie42: 'Caduca en: sesión',
        cookie43: '¿Cómo puedo controlar las cookies en mi navegador?',
        cookie44:
          'Dado que los medios por los que puede rechazar las cookies a través de los controles de su navegador web varían de un navegador a otro, debe visitar el menú de ayuda de su navegador para obtener más información. La siguiente es información sobre cómo administrar las cookies en los navegadores más populares:',
        cookie45:
          'Además, la mayoría de las redes publicitarias le ofrecen una forma de optar por no recibir publicidad dirigida. Si desea obtener más información, visite:',
        cookie46: 'Alianza de Publicidad Digital',
        cookie47: 'Alianza de Publicidad Digital de Canadá',
        cookie48: 'Alianza Europea de Publicidad Digital Interactiva',
        cookie49: '¿Qué pasa con otras tecnologías de seguimiento, como las balizas web?',
        cookie50:
          'Las cookies no son la única forma de reconocer o rastrear a los visitantes de un sitio web. Es posible que utilicemos otras tecnologías similares de vez en cuando, como balizas web (a veces llamadas "píxeles de seguimiento" o "gifs transparentes"). Se trata de pequeños archivos gráficos que contienen un identificador único que nos permite reconocer cuándo alguien ha visitado nuestro sitio web o ha abierto un correo electrónico que lo incluye. Esto nos permite, por ejemplo, monitorear los patrones de tráfico de los usuarios de una página dentro de un sitio web a otra, entregar o comunicarnos con cookies, comprender si ha llegado al sitio web desde un anuncio en línea que se muestra en un sitio web de terceros, mejorar el rendimiento del sitio y medir el éxito de las campañas de marketing por correo electrónico. En muchos casos, estas tecnologías dependen de las cookies para funcionar correctamente, por lo que rechazar las cookies perjudicará su funcionamiento.',
        cookie51: '¿Utiliza cookies Flash u objetos locales compartidos?',
        cookie52:
          'Los sitios web también pueden utilizar las llamadas "cookies Flash" (también conocidas como objetos locales compartidos o "LSO") para, entre otras cosas, recopilar y almacenar información sobre su uso de nuestros servicios, prevención de fraudes y para otras operaciones del sitio.',
        cookie53:
          'Si no desea que las cookies Flash se almacenen en su ordenador, puede ajustar la configuración de su reproductor Flash para bloquear el almacenamiento de cookies Flash utilizando las herramientas contenidas en el ',
        cookie54:
          'Tenga en cuenta que configurar Flash Player para restringir o limitar la aceptación de cookies Flash puede reducir o impedir la funcionalidad de algunas aplicaciones Flash, incluidas, potencialmente, las aplicaciones Flash utilizadas en relación con nuestros servicios o contenido en línea.',
        cookie55: '¿Ofrecen publicidad dirigida?',
        cookie56:
          'Los terceros pueden colocar cookies en su computadora o dispositivo móvil para publicar publicidad a través de nuestro sitio web. Estas empresas pueden utilizar información sobre sus visitas a este y otros sitios web para proporcionar anuncios relevantes sobre bienes y servicios que puedan interesarle. También pueden emplear tecnología que se utiliza para medir la eficacia de los anuncios. Pueden lograr esto mediante el uso de cookies o balizas web para recopilar información sobre sus visitas a este y otros sitios con el fin de proporcionar anuncios relevantes sobre bienes y servicios de posible interés para usted. La información recopilada a través de este proceso no nos permite a nosotros ni a ellos identificar su nombre, datos de contacto u otros detalles que lo identifiquen directamente, a menos que elija proporcionarlos.',
        cookie57: '¿Con qué frecuencia actualizará esta Política de cookies?',
        cookie58:
          'Es posible que actualicemos esta Política de cookies de vez en cuando para reflejar, por ejemplo, los cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Por lo tanto, revise esta Política de cookies con regularidad para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.',
        cookie59:
          'La fecha que aparece en la parte superior de esta Política de cookies indica cuándo se actualizó por última vez.',
        cookie60: '¿Dónde puedo obtener más información?',
        cookie61:
          'Si tiene alguna pregunta sobre nuestro uso de cookies u otras tecnologías, envíenos un correo electrónico a info@sdl24.es o por correo postal a:',
        cookie62: 'España',
        cookie63: 'Esta política de cookies se creó utilizando el ',
        cookie64:
          ' ("Sitio web"). Explica qué son estas tecnologías y por qué las usamos, así como sus derechos para controlar nuestro uso de ellas.',
        cookie65: 'Política de privacidad del servicio de visualización',
        cookie66: 'Panel de configuración de almacenamiento del sitio web',
        cookie67: '. También puede controlar las cookies de Flash yendo al ',
        cookie68: 'Panel de configuración de almacenamiento global',
        cookie69:
          ' y siguiendo las instrucciones (que pueden incluir instrucciones que explican, por ejemplo, cómo eliminar las cookies de Flash existentes (a las que se hace referencia a "información" en el sitio de Macromedia), cómo evitar que se coloquen LSO de Flash en su computadora sin que se lo pidan, y (para Flash Player 8 y versiones posteriores) cómo bloquear las cookies de Flash que no están siendo entregadas por el operador de la página en la que se encuentra en ese momento).',
        cookie70: 'Administrador de consentimiento de cookies',
        cookie71: ' de Termly.',
        legalNotice1:
          'La información proporcionada por FIRST LUXURY REALTY MARBELLA SL ("nosotros", "nos" o "nuestro") en',
        legalNotice2:
          '(el "Sitio") y nuestra aplicación móvil es solo para fines informativos generales. Toda la información en el Sitio y nuestra aplicación móvil se proporciona de buena fe, sin embargo, no hacemos ninguna representación o garantía de ningún tipo, expresa o implícita, con respecto a la exactitud, adecuación, validez, confiabilidad, disponibilidad o integridad de cualquier información en el Sitio o nuestra aplicación móvil. BAJO NINGUNA CIRCUNSTANCIA TENDREMOS NINGUNA RESPONSABILIDAD ANTE USTED POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DEL USO DEL SITIO O NUESTRA APLICACIÓN MÓVIL O LA CONFIANZA EN CUALQUIER INFORMACIÓN PROPORCIONADA EN EL SITIO Y NUESTRA APLICACIÓN MÓVIL. SU USO DEL SITIO Y NUESTRA APLICACIÓN MÓVIL Y SU CONFIANZA EN CUALQUIER INFORMACIÓN EN EL SITIO Y NUESTRA APLICACIÓN MÓVIL ES BAJO SU PROPIA RESPONSABILIDAD.',
        privacyPolicy1:
          'Esta Política de privacidad describe nuestras políticas y procedimientos sobre la recopilación, el uso y la divulgación de su información cuando utiliza el Servicio y le informa sobre sus derechos de privacidad y de acuerdo con cómo la Ley orgánica 3/2018 de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales.',
        privacyPolicy2:
          'Utilizamos sus datos personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, Usted acepta la recopilación y el uso de información de acuerdo con esta Política de privacidad. Esta Política de Privacidad ha sido creada con la ayuda del Generador de Políticas de Privacidad.',
        privacyPolicy3: 'Interpretación y definiciones',
        privacyPolicy4: 'Interpretación',
        privacyPolicy5:
          'Las palabras cuyas letras iniciales se escriben en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en plural.',
        privacyPolicy6: 'Definiciones',
        privacyPolicy7: 'A los efectos de esta Política de Privacidad:',
        privacyPolicy8: 'Cuenta',
        privacyPolicy9:
          'se refiere a una cuenta única creada para que Usted acceda a nuestro Servicio o a partes de nuestro Servicio.',
        privacyPolicy10: 'Filial',
        privacyPolicy11:
          'significa una entidad que controla, es controlada por o está bajo control común con una parte, donde "control" significa la propiedad del 50% o más de las acciones, participaciones en el capital u otros valores con derecho a voto para la elección de directores u otra autoridad administrativa.',
        privacyPolicy12: 'La Compañía',
        privacyPolicy13:
          '(en adelante, "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a SDL - SERVICIO DE LIMPIEZA, Carretera de Cádiz, km 176 Centro de Negocios Oasis, local 9 29602 Marbella Málaga.',
        privacyPolicy14: 'Las cookies',
        privacyPolicy15:
          'son pequeños archivos que un sitio web coloca en su ordenador, dispositivo móvil o cualquier otro dispositivo, que contienen los detalles de su historial de navegación en ese sitio web entre sus muchos usos.',
        privacyPolicy16: 'País',
        privacyPolicy17: 'se refiere a: España.',
        privacyPolicy18: 'Dispositivo',
        privacyPolicy19:
          'se refiere a cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital.',
        privacyPolicy20: 'Los Datos Personales',
        privacyPolicy21:
          'son cualquier información que se relacione con una persona física identificada o identificable.',
        privacyPolicy22: 'El servicio',
        privacyPolicy23: 'se refiere al sitio web.',
        privacyPolicy24: 'Proveedor de servicios',
        privacyPolicy25:
          'significa cualquier persona física o jurídica que procese los datos en nombre de la Compañía. Se refiere a empresas o personas de terceros empleadas por la Empresa para facilitar el Servicio, para prestar el Servicio en nombre de la Empresa, para realizar servicios relacionados con el Servicio o para ayudar a la Empresa a analizar cómo se utiliza el Servicio.',
        privacyPolicy26: 'El Servicio de Redes Sociales de Terceros',
        privacyPolicy27:
          'se refiere a cualquier sitio web o cualquier sitio web de red social a través del cual un Usuario puede iniciar sesión o crear una cuenta para utilizar el Servicio.',
        privacyPolicy28: 'Los Datos de uso',
        privacyPolicy29:
          'se refieren a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o de la propia infraestructura del Servicio (por ejemplo, la duración de una visita a la página).',
        privacyPolicy30: 'El sitio web',
        privacyPolicy31: 'hace referencia a SDL24, accesible desde',
        privacyPolicy32: 'Usted',
        privacyPolicy33:
          'se refiere a la persona que accede o utiliza el Servicio, o a la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.',
        privacyPolicy34: 'Recopilación y uso de sus datos personales',
        privacyPolicy35: 'Tipos de datos recopilados',
        privacyPolicy36:
          'Mientras utiliza nuestro servicio, es posible que le pidamos que nos proporcione cierta información de identificación personal que puede utilizarse para ponerse en contacto con usted o identificarle. La información de identificación personal puede incluir, entre otros:',
        privacyPolicy37: 'Dirección de correo electrónico',
        privacyPolicy38: 'Nombre y apellidos',
        privacyPolicy39: 'Número de teléfono',
        privacyPolicy40: 'Dirección, Estado, Provincia, Código Postal, Ciudad',
        privacyPolicy41: 'Los Datos de uso se recopilan automáticamente cuando se utiliza el Servicio.',
        privacyPolicy42:
          'Los Datos de uso pueden incluir información como la dirección de Protocolo de Internet de su dispositivo (por ejemplo, la dirección IP), el tipo de navegador, la versión del navegador, las páginas de nuestro Servicio que visita, la hora y la fecha de su visita, el tiempo que pasa en esas páginas, identificadores únicos del dispositivo y otros datos de diagnóstico.',
        privacyPolicy43:
          'Cuando accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, incluidos, entre otros, el tipo de dispositivo móvil que utiliza, la identificación única de su dispositivo móvil, la dirección IP de su dispositivo móvil, su sistema operativo móvil, el tipo de navegador de Internet móvil que utiliza, los identificadores únicos del dispositivo y otros datos de diagnóstico.',
        privacyPolicy44:
          'También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede al Servicio a través de un dispositivo móvil.',
        privacyPolicy45: 'Información de servicios de redes sociales de terceros',
        privacyPolicy46:
          'La Compañía le permite crear una cuenta e iniciar sesión para usar el Servicio a través de los siguientes Servicios de Redes Sociales de Terceros:',
        privacyPolicy47:
          'Si decide registrarse a través de un Servicio de Redes Sociales de Terceros o otorgarnos acceso a él, podemos recopilar datos personales que ya están asociados con la cuenta de Su Servicio de Redes Sociales de Terceros, como su nombre, su dirección de correo electrónico, sus actividades o su lista de contactos asociada con esa cuenta.',
        privacyPolicy48:
          'También puede tener la opción de compartir información adicional con la Compañía a través de la cuenta de su Servicio de redes sociales de terceros. Si decide proporcionar dicha información y Datos personales, durante el registro o de otro modo, está dando permiso a la Empresa para utilizarlos, compartirlos y almacenarlos de forma coherente con esta Política de privacidad.',
        privacyPolicy49: 'Tecnologías de seguimiento y cookies',
        privacyPolicy50:
          'Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y almacenar cierta información. Las tecnologías de seguimiento utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar Nuestro Servicio. Las tecnologías que utilizamos pueden incluir:',
        privacyPolicy51: 'Cookies o cookies del navegador.',
        privacyPolicy52:
          'Una cookie es un pequeño archivo que se coloca en su dispositivo. Puede indicarle a su navegador que rechace todas las cookies o que le indique cuándo se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro servicio. A menos que haya ajustado la configuración de su navegador para que rechace las cookies, nuestro servicio puede utilizar cookies.',
        privacyPolicy53: 'Balizas web.',
        privacyPolicy54:
          'Ciertas secciones de nuestro Servicio y nuestros correos electrónicos pueden contener pequeños archivos electrónicos conocidos como balizas web (también denominados gifs transparentes, etiquetas de píxel y gifs de un solo píxel) que permiten a la Compañía, por ejemplo, contar los usuarios que han visitado esas páginas o han abierto un correo electrónico y para otras estadísticas relacionadas con el sitio web (por ejemplo, registrar la popularidad de una determinada sección y verificar la integridad del sistema y del servidor).',
        privacyPolicy55:
          'Las cookies pueden ser "persistentes" o "de sesión". Las cookies persistentes permanecen en su computadora personal o dispositivo móvil cuando se desconecta, mientras que las cookies de sesión se eliminan tan pronto como cierra su navegador web. Puede obtener más información sobre las cookies en el  artículo del sitio web de TermsFeed.',
        privacyPolicy56: 'Cookies necesarias / esenciales',
        privacyPolicy57: 'Tipo: Cookies de sesión',
        privacyPolicy58: 'Administrado por: Nosotros',
        privacyPolicy59:
          'Finalidad: Estas cookies son esenciales para proporcionarle los servicios disponibles a través del sitio web y para permitirle utilizar algunas de sus funciones. Ayudan a autenticar a los usuarios y a evitar el uso fraudulento de las cuentas de usuario. Sin estas cookies, no se pueden proporcionar los servicios que ha solicitado, y solo usamos estas cookies para brindarle esos servicios.',
        privacyPolicy60: 'Política de Cookies / Aviso Aceptación Cookies',
        privacyPolicy61: 'Tipo: Cookies persistentes',
        privacyPolicy62:
          'Finalidad: Estas Cookies identifican si los usuarios han aceptado el uso de cookies en el Sitio Web.',
        privacyPolicy63: 'Cookies de funcionalidad',
        privacyPolicy64:
          'Finalidad: Estas cookies nos permiten recordar las elecciones que realiza cuando utiliza el sitio web, como recordar sus datos de inicio de sesión o su preferencia de idioma. El propósito de estas cookies es proporcionarle una experiencia más personal y evitar que tenga que volver a ingresar sus preferencias cada vez que utilice el sitio web.',
        privacyPolicy66:
          'Para obtener más información sobre las cookies que utilizamos y sus opciones con respecto a las cookies, visite nuestra Política de cookies o la sección Cookies de nuestra Política de privacidad.',
        privacyPolicy67: 'Uso de sus datos personales',
        privacyPolicy68: 'La Empresa podrá utilizar los Datos Personales para las siguientes finalidades:',
        privacyPolicy69: 'Para proporcionar y mantener nuestro Servicio',
        privacyPolicy70: ', incluido el seguimiento del uso de nuestro Servicio.',
        privacyPolicy71: 'Para gestionar su cuenta:',
        privacyPolicy72:
          'para gestionar su registro como usuario del Servicio. Los Datos Personales que nos facilite pueden darle acceso a diferentes funcionalidades del Servicio que están a su disposición como usuario registrado.',
        privacyPolicy73: 'Para la ejecución de un contrato:',
        privacyPolicy74:
          'el desarrollo, cumplimiento y ejecución del contrato de compra de los productos, artículos o servicios que Usted haya adquirido o de cualquier otro contrato con Nosotros a través del Servicio.',
        privacyPolicy75: 'Para contactar con Usted:',
        privacyPolicy76:
          'Para contactarlo por correo electrónico, llamadas telefónicas, SMS, u otras formas equivalentes de comunicación electrónica, tales como notificaciones push de una aplicación móvil sobre actualizaciones o comunicaciones informativas relacionadas con las funcionalidades, productos o servicios contratados, incluidas las actualizaciones de seguridad, cuando sea necesario o razonable para su implementación.',
        privacyPolicy77: 'Para proporcionarle',
        privacyPolicy78:
          'noticias, ofertas especiales e información general sobre otros bienes, servicios y eventos que ofrecemos que son similares a los que ya ha comprado o sobre los que ha preguntado, a menos que haya optado por no recibir dicha información.',
        privacyPolicy79: 'Para gestionar sus solicitudes: ',
        privacyPolicy80: 'Para atender y gestionar sus solicitudes a Nosotros.',
        privacyPolicy81: 'Para transferencias comerciales:',
        privacyPolicy82:
          'Podemos utilizar su información para evaluar o llevar a cabo una fusión, desinversión, reestructuración, reorganización, disolución u otra venta o transferencia de algunos o todos nuestros activos, ya sea como una empresa en funcionamiento o como parte de una quiebra, liquidación o procedimiento similar, en el que los datos personales que tenemos sobre los usuarios de nuestro servicio se encuentran entre los activos transferidos.',
        privacyPolicy83: 'Para otros fines:',
        privacyPolicy84:
          'Podemos utilizar su información para otros fines, como el análisis de datos, la identificación de tendencias de uso, la determinación de la eficacia de nuestras campañas promocionales y para evaluar y mejorar nuestro Servicio, productos, servicios, marketing y su experiencia.',
        privacyPolicy85: 'Podemos compartir su información personal en las siguientes situaciones:',
        privacyPolicy86: 'Con proveedores de servicios:',
        privacyPolicy87:
          'Podemos compartir su información personal con proveedores de servicios para monitorear y analizar el uso de nuestro servicio, para comunicarnos con usted.',
        privacyPolicy88:
          'Podemos compartir o transferir su información personal en relación con, o durante las negociaciones de, cualquier fusión, venta de activos de la Compañía, financiamiento o adquisición de la totalidad o una parte de Nuestro negocio a otra compañía.',
        privacyPolicy89: 'Con afiliados:',
        privacyPolicy90:
          'Podemos compartir su información con nuestros afiliados, en cuyo caso exigiremos a esos afiliados que cumplan con esta Política de privacidad. Las filiales incluyen nuestra empresa matriz y cualquier otra subsidiaria, socios de empresas conjuntas u otras empresas que controlemos o que estén bajo control común con nosotros.',
        privacyPolicy91: 'Con socios comerciales:',
        privacyPolicy92:
          'Podemos compartir su información con nuestros socios comerciales para ofrecerle ciertos productos, servicios o promociones.',
        privacyPolicy93: 'Con otros usuarios:',
        privacyPolicy94:
          'cuando comparte información personal o interactúa en las áreas públicas con otros usuarios, dicha información puede ser vista por todos los usuarios y puede distribuirse públicamente al exterior. Si interactúa con otros usuarios o se registra a través de un Servicio de Redes Sociales de Terceros, Sus contactos en el Servicio de Redes Sociales de Terceros pueden ver Su nombre, perfil, imágenes y descripción de Su actividad. Del mismo modo, otros usuarios podrán ver descripciones de su actividad, comunicarse con usted y ver su perfil.',
        privacyPolicy95: 'Con su consentimiento:',
        privacyPolicy96:
          'Podemos divulgar su información personal para cualquier otro propósito con su consentimiento.',
        privacyPolicy97: 'Retención de sus datos personales',
        privacyPolicy98:
          'La Compañía conservará sus datos personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de privacidad. Conservaremos y utilizaremos sus datos personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales.',
        privacyPolicy99:
          'La Empresa también conservará los Datos de Uso con fines de análisis interno. Por lo general, los datos de uso se conservan durante un período de tiempo más corto, excepto cuando estos datos se utilizan para reforzar la seguridad o mejorar la funcionalidad de nuestro servicio, o cuando estamos legalmente obligados a conservar estos datos durante períodos de tiempo más largos.',
        privacyPolicy100: 'Transferencia de sus datos personales',
        privacyPolicy101:
          'Su información, incluidos los Datos Personales, se procesa en las oficinas operativas de la Compañía y en cualquier otro lugar donde se encuentren las partes involucradas en el procesamiento. Esto significa que esta información puede transferirse y mantenerse en computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.',
        privacyPolicy102:
          'Su consentimiento a esta Política de Privacidad, seguido de Su envío de dicha información, representa Su aceptación de esa transferencia.',
        privacyPolicy103:
          'La Compañía tomará todas las medidas razonablemente necesarias para garantizar que sus datos se traten de forma segura y de acuerdo con esta Política de privacidad y no se realizará ninguna transferencia de sus datos personales a una organización o un país a menos que existan controles adecuados, incluida la seguridad de sus datos y otra información personal.',
        privacyPolicy104: 'Eliminar sus datos personales',
        privacyPolicy105:
          'Tiene derecho a eliminar o solicitar que le ayudemos a eliminar los Datos personales que hemos recopilado sobre usted.',
        privacyPolicy106:
          'Nuestro Servicio puede darle la posibilidad de eliminar cierta información sobre Usted desde el Servicio.',
        privacyPolicy107:
          'Puede actualizar, modificar o eliminar su información en cualquier momento iniciando sesión en su cuenta, si tiene una, y visitando la sección de configuración de la cuenta que le permite administrar su información personal. También puede ponerse en contacto con nosotros para solicitar acceso, corregir o eliminar cualquier información personal que nos haya proporcionado.',
        privacyPolicy108:
          'Sin embargo, tenga en cuenta que es posible que necesitemos conservar cierta información cuando tengamos una obligación legal o una base legal para hacerlo.',
        privacyPolicy109: 'Divulgación de sus datos personales',
        privacyPolicy110: 'Transacciones comerciales',
        privacyPolicy111:
          'Si la Compañía está involucrada en una fusión, adquisición o venta de activos, sus datos personales pueden ser transferidos. Le notificaremos antes de que sus datos personales se transfieran y estén sujetos a una política de privacidad diferente.',
        privacyPolicy112: 'Aplicación de la ley',
        privacyPolicy113:
          'En determinadas circunstancias, es posible que se exija a la Empresa que revele sus datos personales si así lo exige la ley o en respuesta a solicitudes válidas de las autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental).',
        privacyPolicy114: 'Otros requisitos legales',
        privacyPolicy115:
          'La Compañía puede divulgar sus datos personales en la creencia de buena fe de que dicha acción es necesaria para:',
        privacyPolicy116: 'Cumplir con una obligación legal',
        privacyPolicy117: 'Proteger y defender los derechos o la propiedad de la Empresa',
        privacyPolicy118: 'Prevenir o investigar posibles irregularidades en relación con el Servicio',
        privacyPolicy119: 'Proteger la seguridad personal de los Usuarios del Servicio o del público',
        privacyPolicy120: 'Protéjase contra la responsabilidad legal',
        privacyPolicy121: 'Seguridad de sus datos personales',
        privacyPolicy122:
          'La seguridad de sus datos personales es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus datos personales, no podemos garantizar su seguridad absoluta.',
        privacyPolicy123: 'Privacidad de los niños',
        privacyPolicy124:
          'Nuestro Servicio no se dirige a ninguna persona menor de 13 años. No recopilamos a sabiendas información de identificación personal de ninguna persona menor de 13 años. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado datos personales, póngase en contacto con nosotros. Si nos damos cuenta de que hemos recopilado datos personales de cualquier persona menor de 13 años sin la verificación del consentimiento de los padres, tomamos medidas para eliminar esa información de nuestros servidores.',
        privacyPolicy125:
          'Si necesitamos basarnos en el consentimiento como base legal para procesar su información y su país requiere el consentimiento de uno de los padres, podemos requerir el consentimiento de sus padres antes de recopilar y usar esa información.',
        privacyPolicy126: 'Enlaces a otros sitios web',
        privacyPolicy127:
          'Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por Nosotros. Si hace clic en un enlace de terceros, se le dirigirá al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de cada sitio que visite.',
        privacyPolicy128:
          'No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios o servicios de terceros.',
        privacyPolicy129: 'Cambios a esta Política de Privacidad',
        privacyPolicy130:
          'Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le notificaremos cualquier cambio mediante la publicación de la nueva Política de privacidad en esta página.',
        privacyPolicy131:
          'Le informaremos por correo electrónico y/o un aviso destacado en Nuestro Servicio, antes de que el cambio entre en vigencia y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de privacidad.',
        privacyPolicy132:
          'Se recomienda revisar esta Política de privacidad periódicamente para ver si hay cambios. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.',
        privacyPolicy133: 'Contáctenos',
        privacyPolicy134:
          'Si tiene alguna pregunta sobre esta Política de Privacidad, puede ponerse en contacto con nosotros:',
        privacyPolicy135: 'Por correo electrónico',
        privacyPolicy136: 'Visitando esta página de nuestro sitio web',
        privacyPolicy137: 'Utilizamos cookies de sesión y persistentes para los fines que se indican a continuación:',
        privacyPolicy138: 'Datos personales',
        privacyPolicy139: 'Datos de uso',
        termsOfUse1: 'ACEPTACIÓN DE NUESTROS TÉRMINOS LEGALES',
        termsOfUse2:
          'Somos FIRST LUXURY REALTY MARBELLA SL, operando bajo el nombre de First Luxury Realty Marbella SL y First SL ("Empresa", "nosotros", "nos", "nuestro"), una empresa registrada en España en Carretera de Cádiz, km 176 Centro de Negocios Oasis, local 9, Marbella, Málaga 29602. Nuestro número de IVA es B72522485.',
        termsOfUse3: 'Operamos el sitio web',
        termsOfUse4:
          '(el "Sitio"), así como cualquier otro producto y servicio relacionado que haga referencia o enlace a estos términos legales (los "Términos legales") (colectivamente, los "Servicios").',
        termsOfUse5:
          'Puede ponerse en contacto con nosotros por correo electrónico en info@sdl24.es o por correo postal a Carretera de Cádiz, km 176 Centro de Negocios Oasis, local 9, Marbella, Málaga 29602, España.',
        termsOfUse6:
          'Estos Términos Legales constituyen un acuerdo legalmente vinculante realizado entre usted, ya sea personalmente o en nombre de una entidad ("usted"), y FIRST LUXURY REALTY MARBELLA SL, con respecto a su acceso y uso de los Servicios. Usted acepta que, al acceder a los Servicios, ha leído, entendido y aceptado estar sujeto a todos estos Términos legales. SI NO ESTÁ DE ACUERDO CON TODOS ESTOS TÉRMINOS LEGALES, SE LE PROHÍBE EXPRESAMENTE EL USO DE LOS SERVICIOS Y DEBE DEJAR DE USARLOS DE INMEDIATO.',
        termsOfUse7:
          'Le notificaremos con antelación cualquier cambio programado en los Servicios que esté utilizando. Los Términos Legales modificados entrarán en vigencia en el momento en que se publiquen o notifiquen por info@sdl24.es, como se indica en el mensaje de correo electrónico. Al continuar utilizando los Servicios después de la fecha de entrada en vigor de cualquier cambio, usted acepta estar sujeto a los términos modificados.',
        termsOfUse8:
          'Los Servicios están destinados a usuarios mayores de 18 años. Las personas menores de 18 años no pueden usar o registrarse en los Servicios.',
        termsOfUse9: 'Le recomendamos que imprima una copia de estos Términos legales para sus registros.',
        termsOfUse10: 'TABLA DE CONTENIDOS',
        termsOfUse11: 'NUESTROS SERVICIOS',
        termsOfUse12: 'DERECHOS DE PROPIEDAD INTELECTUAL',
        termsOfUse13: 'REPRESENTACIONES DEL USUARIO',
        termsOfUse14: 'REGISTRO DE USUARIO',
        termsOfUse15: 'COMPRAS Y PAGO',
        termsOfUse16: 'POLÍTICA',
        termsOfUse17: 'ACTIVIDADES PROHIBIDAS',
        termsOfUse18: 'CONTRIBUCIONES GENERADAS POR EL USUARIO',
        termsOfUse19: 'LICENCIA DE CONTRIBUCIÓN',
        termsOfUse20: 'DIRECTRICES PARA LAS REVISIONES',
        termsOfUse21: 'REDES SOCIALES',
        termsOfUse22: 'GESTIÓN DE SERVICIOS',
        termsOfUse23: 'POLÍTICA DE PRIVACIDAD',
        termsOfUse24: 'PLAZO Y RESCISIÓN',
        termsOfUse25: 'MODIFICACIONES E INTERRUPCIONES',
        termsOfUse26: 'LEGISLACIÓN APLICABLE',
        termsOfUse27: 'RESOLUCIÓN DE DISPUTAS',
        termsOfUse28: 'CORRECCIONES',
        termsOfUse29: 'DESCARGO DE RESPONSABILIDAD',
        termsOfUse30: 'LIMITACIONES DE RESPONSABILIDAD',
        termsOfUse31: 'INDEMNIZACIÓN',
        termsOfUse32: 'DATOS DEL USUARIO',
        termsOfUse33: 'COMUNICACIONES, TRANSACCIONES Y FIRMAS ELECTRÓNICAS',
        termsOfUse34: 'MISCELÁNEA',
        termsOfUse35: 'CONTÁCTANOS',
        termsOfUse36:
          'La información proporcionada al utilizar los Servicios no está destinada a ser distribuida o utilizada por ninguna persona o entidad en ninguna jurisdicción o país donde dicha distribución o uso sea contrario a la ley o regulación o que nos someta a cualquier requisito de registro dentro de dicha jurisdicción o país. En consecuencia, aquellas personas que opten por acceder a los Servicios desde otros lugares lo hacen por su propia iniciativa y son las únicas responsables del cumplimiento de las leyes locales, si y en la medida en que las leyes locales sean aplicables.',
        termsOfUse37: 'Nuestra propiedad intelectual',
        termsOfUse38:
          'Somos el propietario o licenciatario de todos los derechos de propiedad intelectual de nuestros Servicios, incluido todo el código fuente, las bases de datos, la funcionalidad, el software, los diseños de sitios web, el audio, el video, el texto, las fotografías y los gráficos de los Servicios (colectivamente, el "Contenido"), así como las marcas comerciales, las marcas de servicio y los logotipos contenidos en ellos (las "Marcas").',
        termsOfUse39:
          'Nuestro Contenido y Marcas están protegidos por las leyes de derechos de autor y marcas comerciales (y varios otros derechos de propiedad intelectual y leyes de competencia desleal) y tratados en los Estados Unidos y en todo el mundo.',
        termsOfUse40:
          'El Contenido y las Marcas se proporcionan en o a través de los Servicios "TAL CUAL" para su uso personal y no comercial únicamente.',
        termsOfUse41: 'Su uso de nuestros Servicios',
        termsOfUse42: 'Sujeto a su cumplimiento de estos Términos legales, incluida la sección "',
        termsOfUse43: '" a continuación, le otorgamos una licencia no exclusiva, intransferible y revocable para:',
        termsOfUse44: 'acceder a los Servicios;',
        termsOfUse45:
          'descargar o imprimir una copia de cualquier parte del Contenido a la que haya obtenido acceso correctamente.',
        termsOfUse46: 'Únicamente para su uso personal y no comercial',
        termsOfUse47:
          'A excepción de lo establecido en esta sección o en cualquier otra parte de nuestros Términos legales, ninguna parte de los Servicios y ningún Contenido o Marcas pueden copiarse, reproducirse, agregarse, volver a publicarse, cargarse, publicarse, mostrarse públicamente, codificarse, traducirse, transmitirse, distribuirse, venderse, licenciarse o explotarse de otro modo para ningún propósito comercial, sin nuestro permiso previo expreso por escrito.',
        termsOfUse48:
          'Si desea hacer algún uso de los Servicios, el Contenido o las Marcas que no sea el establecido en esta sección o en cualquier otra parte de nuestros Términos legales, dirija su solicitud a: info@sdl24.es. Si alguna vez le otorgamos permiso para publicar, reproducir o mostrar públicamente cualquier parte de nuestros Servicios o Contenido, debe identificarnos como propietarios o licenciantes de los Servicios, Contenido o Marcas y asegurarse de que cualquier aviso de derechos de autor o propiedad aparezca o sea visible al publicar, reproducir o mostrar nuestro Contenido.',
        termsOfUse49:
          'Nos reservamos todos los derechos que no se le otorguen expresamente sobre los Servicios, el Contenido y las Marcas.',
        termsOfUse50:
          'Cualquier incumplimiento de estos Derechos de Propiedad Intelectual constituirá un incumplimiento sustancial de nuestros Términos Legales y su derecho a utilizar nuestros Servicios terminará de inmediato.',
        termsOfUse51: 'Sus envíos',
        termsOfUse52: 'Revise detenidamente esta sección y la sección "',
        termsOfUse53:
          '" antes de utilizar nuestros Servicios para comprender (a) los derechos que nos otorga y (b) las obligaciones que tiene cuando publica o carga cualquier contenido a través de los Servicios.',
        termsOfUse54: 'Envíos:',
        termsOfUse55:
          'Al enviarnos directamente cualquier pregunta, comentario, sugerencia, idea, retroalimentación u otra información sobre los Servicios ("Envíos"), usted acepta cedernos todos los derechos de propiedad intelectual sobre dicho Envío. Usted acepta que seremos propietarios de este Envío y tendremos derecho a su uso y difusión sin restricciones para cualquier propósito legal, comercial o de otro tipo, sin reconocimiento ni compensación para usted.',
        termsOfUse56: 'Usted es responsable de lo que publica o carga:',
        termsOfUse57: 'Al enviarnos Envíos a través de cualquier parte de los Servicios, usted:',
        termsOfUse58: 'confirme que ha leído y está de acuerdo con nuestras "',
        termsOfUse59:
          '" y que no publicará, enviará, publicará, cargará o transmitirá a través de los Servicios ningún Envío que sea ilegal, acosador, odioso, dañino, difamatorio, obsceno, intimidatorio, abusivo, discriminatorio, amenazante para cualquier persona o grupo, sexualmente explícito, falso, inexacto, engañoso o engañoso;',
        termsOfUse60:
          'en la medida en que lo permita la ley aplicable, renuncia a todos y cada uno de los derechos morales sobre dicha Presentación;',
        termsOfUse61:
          'garantiza que dichos Envíos son originales de usted o que tiene los derechos y licencias necesarios para enviar dichos Envíos y que tiene plena autoridad para otorgarnos los derechos mencionados anteriormente en relación con sus Envíos;',
        termsOfUse62: 'garantiza y declara que sus Envíos no constituyen información confidencial.',
        termsOfUse63:
          'Usted es el único responsable de sus Envíos y acepta expresamente reembolsarnos todas y cada una de las pérdidas que podamos sufrir debido a su incumplimiento de (a) esta sección, (b) los derechos de propiedad intelectual de terceros o (c) la ley aplicable.',
        termsOfUse64:
          'Al utilizar los Servicios, usted declara y garantiza que: (1) toda la información de registro que envíe será verdadera, precisa, actual y completa; (2) mantendrá la exactitud de dicha información y actualizará de inmediato dicha información de registro según sea necesario; (3) tiene la capacidad legal y acepta cumplir con estos Términos legales; (4) no es menor de edad en la jurisdicción en la que reside; (5) no accederá a los Servicios a través de medios automatizados o no humanos, ya sea a través de un bot, script o de otro modo; (6) no utilizará los Servicios para ningún propósito ilegal o no autorizado; y (7) su uso de los Servicios no violará ninguna ley o regulación aplicable.',
        termsOfUse65:
          'Si proporciona información falsa, inexacta, desactualizada o incompleta, tenemos derecho a suspender o cancelar su cuenta y rechazar cualquier uso actual o futuro de los Servicios (o cualquier parte de los mismos).',
        termsOfUse66:
          'Es posible que se le solicite que se registre para utilizar los Servicios. Usted acepta mantener la confidencialidad de su contraseña y será responsable de todo el uso de su cuenta y contraseña. Nos reservamos el derecho de eliminar, reclamar o cambiar un nombre de usuario que seleccione si determinamos, a nuestra entera discreción, que dicho nombre de usuario es inapropiado, obsceno u objetable.',
        termsOfUse67: 'Aceptamos las siguientes formas de pago:',
        termsOfUse68:
          'Usted acepta proporcionar información de compra y cuenta actual, completa y precisa para todas las compras realizadas a través de los Servicios. Además, acepta actualizar de inmediato la información de la cuenta y el pago, incluida la dirección de correo electrónico, el método de pago y la fecha de vencimiento de la tarjeta de pago, para que podamos completar sus transacciones y comunicarnos con usted según sea necesario. El impuesto sobre las ventas se agregará al precio de las compras según lo consideremos necesario. Podemos cambiar los precios en cualquier momento. Todos los pagos se realizarán en euros.',
        termsOfUse69:
          'Usted acepta pagar todos los cargos a los precios vigentes en ese momento para sus compras y las tarifas de envío aplicables, y nos autoriza a cobrar a su proveedor de pago elegido dichos montos al realizar su pedido. Nos reservamos el derecho de corregir cualquier error o equivocación en los precios, incluso si ya hemos solicitado o recibido el pago.',
        termsOfUse70:
          'Nos reservamos el derecho de rechazar cualquier pedido realizado a través de los Servicios. Podemos, a nuestra entera discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, el mismo método de pago y/o pedidos que utilizan la misma dirección de facturación o envío. Nos reservamos el derecho de limitar o prohibir los pedidos que, a nuestro exclusivo criterio, parezcan haber sido realizados por concesionarios, revendedores o distribuidores.',
        termsOfUse71:
          'Revise nuestra Política de devoluciones publicada en los Servicios antes de realizar cualquier compra.',
        termsOfUse72:
          'No puede acceder ni utilizar los Servicios para ningún otro propósito que no sea aquel para el que ponemos a disposición los Servicios. Los Servicios no se pueden utilizar en relación con ningún esfuerzo comercial, excepto aquellos que estén específicamente respaldados o aprobados por nosotros.',
        termsOfUse73: 'Como usuario de los Servicios, usted se compromete a no:',
        termsOfUse74:
          'Recuperar sistemáticamente datos u otro contenido de los Servicios para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.',
        termsOfUse75:
          'Engañarnos, defraudarnos o engañarnos a nosotros y a otros usuarios, especialmente en cualquier intento de obtener información confidencial de la cuenta, como las contraseñas de los usuarios.',
        termsOfUse76:
          'Eludir, deshabilitar o interferir de otro modo con las funciones relacionadas con la seguridad de los Servicios, incluidas las funciones que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones en el uso de los Servicios y/o el Contenido incluido en ellos.',
        termsOfUse77: 'Menospreciar, empañar o dañar de otro modo, en nuestra opinión, a nosotros y/o a los Servicios.',
        termsOfUse78:
          'Usar cualquier información obtenida de los Servicios para acosar, abusar o dañar a otra persona.',
        termsOfUse79:
          'Hacer un uso indebido de nuestros servicios de soporte o enviar informes falsos de abuso o mala conducta.',
        termsOfUse80: 'Usar los Servicios de una manera inconsistente con las leyes o regulaciones aplicables.',
        termsOfUse81: 'Participar en el encuadre o enlace no autorizado a los Servicios.',
        termsOfUse82:
          'Cargar o transmitir (o intentar cargar o transmitir) virus, troyanos u otro material, incluido el uso excesivo de letras mayúsculas y spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido de los Servicios por parte de cualquier parte o modifique, perjudique, interrumpa, altere o interfiera con el uso, las características, las funciones, la operación o el mantenimiento de los Servicios.',
        termsOfUse83:
          'Participar en cualquier uso automatizado del sistema, como el uso de scripts para enviar comentarios o mensajes, o el uso de minería de datos, robots o herramientas similares de recopilación y extracción de datos.',
        termsOfUse84: 'Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.',
        termsOfUse85:
          'Intentar hacerse pasar por otro usuario o persona o utilizar el nombre de usuario de otro usuario.',
        termsOfUse86:
          'Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, formatos de intercambio de gráficos claros ("gifs"), píxeles 1×1, web bugs, cookies u otros dispositivos similares (a veces denominados "spyware" o "mecanismos de recopilación pasiva" o "pcms").',
        termsOfUse87:
          'Interferir, interrumpir o crear una carga indebida en los Servicios o en las redes o servicios conectados a los Servicios.',
        termsOfUse88:
          'Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes que participen en la prestación de cualquier parte de los Servicios.',
        termsOfUse89:
          'Intentar eludir cualquier medida de los Servicios diseñada para impedir o restringir el acceso a los Servicios, o a cualquier parte de los Servicios.',
        termsOfUse90:
          'Copiar o adaptar el software de los Servicios, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.',
        termsOfUse91:
          'Salvo que lo permita la ley aplicable, descifrar, descompilar, desensamblar o aplicar ingeniería inversa a cualquier software que comprenda o forme parte de los Servicios.',
        termsOfUse92:
          'Excepto en la medida en que sea el resultado del uso estándar de motores de búsqueda o navegadores de Internet, usar, iniciar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad de trampas, raspador o lector fuera de línea que acceda a los Servicios, o usar o iniciar cualquier script u otro software no autorizado.',
        termsOfUse93: 'Utilizar un agente de compras o un agente de compras para realizar compras en los Servicios.',
        termsOfUse94:
          'Hacer cualquier uso no autorizado de los Servicios, incluida la recopilación de nombres de usuario y/o direcciones de correo electrónico de los usuarios por medios electrónicos o de otro tipo con el fin de enviar correos electrónicos no solicitados o crear cuentas de usuario por medios automatizados o bajo falsos pretextos.',
        termsOfUse95:
          'Utilizar los Servicios como parte de cualquier esfuerzo para competir con nosotros o utilizar los Servicios y/o el Contenido para cualquier esfuerzo de generación de ingresos o empresa comercial.',
        termsOfUse96: 'Vender o transferir su perfil.',
        termsOfUse97:
          'Los Servicios no ofrecen a los usuarios enviar o publicar contenido. Podemos brindarle la oportunidad de crear, enviar, publicar, mostrar, transmitir, realizar, publicar, distribuir o difundir contenido y materiales para nosotros o en los Servicios, incluidos, entre otros, texto, escritos, video, audio, fotografías, gráficos, comentarios, sugerencias o información personal u otro material (colectivamente, "Contribuciones"). Las contribuciones pueden ser vistas por otros usuarios de los Servicios y a través de sitios web de terceros. Como tal, cualquier Contribución que transmita puede ser tratada de acuerdo con la Política de Privacidad de los Servicios. Cuando creas o pones a disposición cualquier Contribuciones, declaras y garantizas que:',
        termsOfUse98:
          'La creación, distribución, transmisión, exhibición pública o ejecución, y el acceso, descarga o copia de sus Contribuciones no infringen ni infringirán los derechos de propiedad, incluidos, entre otros, los derechos de autor, patentes, marcas comerciales, secretos comerciales o derechos morales de terceros.',
        termsOfUse99:
          'Usted es el creador y propietario o tiene las licencias, derechos, consentimientos, liberaciones y permisos necesarios para usar y autorizarnos a nosotros, a los Servicios y a otros usuarios de los Servicios a usar sus Contribuciones de cualquier manera contemplada por los Servicios y estos Términos Legales.',
        termsOfUse100:
          'Usted cuenta con el consentimiento, la liberación y/o el permiso por escrito de todas y cada una de las personas individuales identificables en sus Contribuciones para utilizar el nombre o la imagen de todas y cada una de esas personas individuales identificables para permitir la inclusión y el uso de sus Contribuciones de cualquier manera contemplada por los Servicios y estos Términos Legales.',
        termsOfUse101: 'Sus Contribuciones no son falsas, inexactas o engañosas.',
        termsOfUse102:
          'Sus Contribuciones no son publicidad no solicitada o no autorizada, materiales promocionales, esquemas piramidales, cartas en cadena, spam, correos masivos u otras formas de solicitud.',
        termsOfUse103:
          'Sus Contribuciones no son obscenas, lascivas, lascivas, sucias, violentas, acosadoras, difamatorias, calumniosas o de otro modo objetables (según lo determinemos nosotros).',
        termsOfUse104: 'Sus Contribuciones no ridiculizan, se burlan, menosprecian, intimidan o abusan de nadie.',
        termsOfUse105:
          'Sus Contribuciones no se utilizan para acosar o amenazar (en el sentido legal de esos términos) a ninguna otra persona y para promover la violencia contra una persona o clase específica de personas.',
        termsOfUse106: 'Sus Contribuciones no violan ninguna ley, reglamento o norma aplicable.',
        termsOfUse107: 'Sus Contribuciones no violan los derechos de privacidad o publicidad de ningún tercero.',
        termsOfUse108:
          'Sus Contribuciones no violan ninguna ley aplicable con respecto a la pornografía infantil, ni tienen la intención de proteger la salud o el bienestar de los menores.',
        termsOfUse109:
          'Sus Contribuciones no incluyen ningún comentario ofensivo relacionado con la raza, el origen nacional, el género, la preferencia sexual o la discapacidad física.',
        termsOfUse110:
          'Sus Contribuciones no violan de ninguna otra manera, ni se vinculan a material que viole, ninguna disposición de estos Términos Legales, ni ninguna ley o reglamento aplicable.',
        termsOfUse111:
          'Cualquier uso de los Servicios que infrinja lo anterior infringe estos Términos legales y puede dar lugar, entre otras cosas, a la rescisión o suspensión de sus derechos de uso de los Servicios.',
        termsOfUse112:
          'Usted y los Servicios acuerdan que podemos acceder, almacenar, procesar y utilizar cualquier información y datos personales que proporcione siguiendo los términos de la Política de privacidad y sus opciones (incluida la configuración).',
        termsOfUse113:
          'Al enviar sugerencias u otros comentarios con respecto a los Servicios, usted acepta que podemos usar y compartir dichos comentarios para cualquier propósito sin compensación para usted.',
        termsOfUse114:
          'No afirmamos ninguna propiedad sobre sus Contribuciones. Usted conserva la propiedad total de todas sus Contribuciones y cualquier derecho de propiedad intelectual u otros derechos de propiedad asociados con sus Contribuciones. No somos responsables de ninguna declaración o representación en sus Contribuciones proporcionadas por usted en cualquier área de los Servicios. Usted es el único responsable de sus Contribuciones a los Servicios y acepta expresamente exonerarnos de toda responsabilidad y abstenerse de cualquier acción legal contra nosotros con respecto a sus Contribuciones.',
        termsOfUse115:
          'Es posible que le proporcionemos áreas en los Servicios para dejar comentarios o calificaciones. Al publicar una reseña, debe cumplir con los siguientes criterios: (1) debe tener experiencia de primera mano con la persona/entidad que se está revisando; (2) sus reseñas no deben contener blasfemias ofensivas ni lenguaje abusivo, racista, ofensivo o que incite al odio; (3) sus reseñas no deben contener referencias discriminatorias basadas en religión, raza, género, origen nacional, edad, estado civil, orientación sexual o discapacidad; (4) sus reseñas no deben contener referencias a actividades ilegales; (5) no debe estar afiliado a competidores si publica reseñas negativas; (6) no debe sacar ninguna conclusión sobre la legalidad de la conducta; (7) no puede publicar declaraciones falsas o engañosas; y (8) no puede organizar una campaña que anime a otros a publicar reseñas, ya sean positivas o negativas.',
        termsOfUse116:
          'Podemos aceptar, rechazar o eliminar reseñas a nuestra entera discreción. No tenemos absolutamente ninguna obligación de filtrar o eliminar reseñas, incluso si alguien considera que las reseñas son objetables o inexactas. Las reseñas no están respaldadas por nosotros y no representan necesariamente nuestras opiniones ni los puntos de vista de ninguno de nuestros afiliados o socios. No asumimos ninguna responsabilidad por ninguna revisión ni por ninguna reclamación, responsabilidad o pérdida que resulte de cualquier revisión. Al publicar una reseña, por la presente nos otorga un derecho y una licencia perpetuos, no exclusivos, mundiales, libres de regalías, totalmente pagados, asignables y sublicenciables para reproducir, modificar, traducir, transmitir por cualquier medio, mostrar, realizar y/o distribuir todo el contenido relacionado con la reseña.',
        termsOfUse117:
          'Como parte de la funcionalidad de los Servicios, puede vincular su cuenta con cuentas en línea que tenga con proveedores de servicios externos (cada una de dichas cuentas, una "Cuenta de terceros") ya sea: (1) proporcionando la información de inicio de sesión de su Cuenta de terceros a través de los Servicios; o (2) permitirnos acceder a su Cuenta de Terceros, según lo permitan los términos y condiciones aplicables que rigen su uso de cada Cuenta de Terceros. Usted declara y garantiza que tiene derecho a revelarnos la información de inicio de sesión de su Cuenta de Terceros y/o a concedernos acceso a su Cuenta de Terceros, sin que usted incumpla ninguno de los términos y condiciones que rigen su uso de la Cuenta de Terceros correspondiente, y sin obligarnos a pagar ninguna tarifa ni someternos a ninguna limitación de uso impuesta por el proveedor de servicios de terceros de la Cuenta de Terceros. Al otorgarnos acceso a cualquier Cuenta de Terceros, usted entiende que (1) podemos acceder, poner a disposición y almacenar (si corresponde) cualquier contenido que haya proporcionado y almacenado en su Cuenta de Terceros (el "Contenido de la Red Social") para que esté disponible en y a través de los Servicios a través de su cuenta, incluidas, entre otras, las listas de amigos y (2) podemos enviar y recibir de su Cuenta de Terceros información adicional en la medida en que usted se le notificará cuando vincule su cuenta con la Cuenta de terceros. Dependiendo de las Cuentas de Terceros que elija y sujeto a la configuración de privacidad que haya establecido en dichas Cuentas de Terceros, la información de identificación personal que publique en sus Cuentas de Terceros puede estar disponible en y a través de su cuenta en los Servicios. Tenga en cuenta que si una Cuenta de Terceros o un servicio asociado deja de estar disponible o si el proveedor de servicios de terceros cancela nuestro acceso a dicha Cuenta de Terceros, es posible que el Contenido de la Red Social ya no esté disponible en y a través de los Servicios. Tendrá la posibilidad de desactivar la conexión entre su cuenta en los Servicios y sus Cuentas de terceros en cualquier momento. TENGA EN CUENTA QUE SU RELACIÓN CON LOS PROVEEDORES DE SERVICIOS EXTERNOS ASOCIADOS CON SUS CUENTAS DE TERCEROS SE RIGE ÚNICAMENTE POR SU(S) ACUERDO(S) CON DICHOS PROVEEDORES DE SERVICIOS EXTERNOS. No hacemos ningún esfuerzo por revisar ningún Contenido de Redes Sociales para ningún propósito, incluidos, entre otros, la precisión, legalidad o no infracción, y no somos responsables de ningún Contenido de Redes Sociales. Usted reconoce y acepta que podemos acceder a su libreta de direcciones de correo electrónico asociada con una Cuenta de terceros y a su lista de contactos almacenada en su dispositivo móvil o tableta únicamente con el fin de identificar e informarle de aquellos contactos que también se han registrado para utilizar los Servicios. Puede desactivar la conexión entre los Servicios y su Cuenta de Terceros poniéndose en contacto con nosotros utilizando la información de contacto que aparece a continuación o a través de la configuración de su cuenta (si procede). Intentaremos eliminar cualquier información almacenada en nuestros servidores que se haya obtenido a través de dicha Cuenta de terceros, excepto el nombre de usuario y la foto de perfil que se asocien con su cuenta.',
        termsOfUse118:
          'Nos reservamos el derecho, pero no la obligación, de: (1) monitorear los Servicios para detectar violaciones de estos Términos legales; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos legales, incluyendo, sin limitación, denunciar a dicho usuario a las autoridades policiales; (3) a nuestra entera discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad o deshabilitar (en la medida en que sea tecnológicamente posible) cualquiera de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, para eliminar de los Servicios o deshabilitar de otro modo todos los archivos y contenidos que sean de tamaño excesivo o que sean de alguna manera gravosos para nuestros sistemas; y (5) administrar los Servicios de una manera diseñada para proteger nuestros derechos y propiedad y para facilitar el funcionamiento adecuado de los Servicios.',
        termsOfUse119:
          'Nos preocupamos por la privacidad y la seguridad de los datos. Por favor, revise nuestra Política de Privacidad:',
        termsOfUse120:
          'Estos Términos Legales permanecerán en pleno vigor y efecto mientras utilice los Servicios. SIN PERJUICIO DE CUALQUIER OTRA DISPOSICIÓN DE ESTOS TÉRMINOS LEGALES, NOS RESERVAMOS EL DERECHO DE, A NUESTRA ENTERA DISCRECIÓN Y SIN PREVIO AVISO NI RESPONSABILIDAD, DENEGAR EL ACCESO Y EL USO DE LOS SERVICIOS (INCLUIDO EL BLOQUEO DE CIERTAS DIRECCIONES IP), A CUALQUIER PERSONA POR CUALQUIER MOTIVO O SIN MOTIVO, INCLUIDO, ENTRE OTROS, EL INCUMPLIMIENTO DE CUALQUIER REPRESENTACIÓN, GARANTÍA O PACTO CONTENIDO EN ESTOS TÉRMINOS LEGALES O DE CUALQUIER LEY O REGLAMENTO APLICABLE. PODEMOS CANCELAR SU USO O PARTICIPACIÓN EN LOS SERVICIOS O ELIMINAR SU CUENTA Y CUALQUIER CONTENIDO O INFORMACIÓN QUE HAYA PUBLICADO EN CUALQUIER MOMENTO, SIN PREVIO AVISO, A NUESTRA ENTERA DISCRECIÓN.',
        termsOfUse121:
          'Si cancelamos o suspendemos su cuenta por cualquier motivo, se le prohíbe registrarse y crear una nueva cuenta con su nombre, un nombre falso o prestado, o el nombre de un tercero, incluso si puede estar actuando en nombre del tercero. Además de cancelar o suspender su cuenta, nos reservamos el derecho de emprender las acciones legales apropiadas, incluidas, entre otras, la búsqueda de reparaciones civiles, penales y cautelares.',
        termsOfUse122:
          'Nos reservamos el derecho de cambiar, modificar o eliminar el contenido de los Servicios en cualquier momento o por cualquier motivo a nuestra entera discreción sin previo aviso. Sin embargo, no tenemos ninguna obligación de actualizar ninguna información sobre nuestros Servicios. No seremos responsables ante usted ni ante ningún tercero por ninguna modificación, cambio de precio, suspensión o interrupción de los Servicios.',
        termsOfUse123:
          'No podemos garantizar que los Servicios estén disponibles en todo momento. Es posible que experimentemos problemas de hardware, software u otros problemas o que necesitemos realizar tareas de mantenimiento relacionadas con los Servicios, lo que provocará interrupciones, retrasos o errores. Nos reservamos el derecho de cambiar, revisar, actualizar, suspender, interrumpir o modificar los Servicios en cualquier momento o por cualquier motivo sin previo aviso. Usted acepta que no tenemos responsabilidad alguna por cualquier pérdida, daño o inconveniente causado por su incapacidad para acceder o utilizar los Servicios durante cualquier tiempo de inactividad o interrupción de los Servicios. Nada de lo dispuesto en estos Términos legales se interpretará en el sentido de obligarnos a mantener y respaldar los Servicios o a proporcionar correcciones, actualizaciones o lanzamientos en relación con los mismos.',
        termsOfUse124:
          'Estos Términos Legales se rigen e interpretan de acuerdo con las leyes de España, quedando expresamente excluido el uso de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. Si su residencia habitual se encuentra en la UE y usted es un consumidor, también posee la protección que le brindan las disposiciones obligatorias de la ley de su país de residencia. FIRST LUXURY REALTY MARBELLA SL y usted acuerdan someterse a la jurisdicción no exclusiva de los tribunales de Marbella Málaga, lo que significa que usted puede presentar una reclamación para defender sus derechos de protección del consumidor con respecto a estos Términos Legales en España, o en el país de la UE en el que reside.',
        termsOfUse125: 'Negociaciones informales',
        termsOfUse126:
          'Para acelerar la resolución y controlar el costo de cualquier disputa, controversia o reclamo relacionado con estos Términos legales (cada uno de ellos una "Disputa" y colectivamente, las "Disputas") presentados por usted o por nosotros (individualmente, una "Parte" y colectivamente, las "Partes"), las Partes acuerdan intentar primero negociar cualquier Disputa (excepto aquellas Disputas que se indican expresamente a continuación) de manera informal durante al menos treinta (30) días antes de iniciar el arbitraje. Dichas negociaciones informales comenzarán previa notificación por escrito de una Parte a la otra Parte.',
        termsOfUse127: 'Arbitraje vinculante',
        termsOfUse128:
          'Cualquier disputa que surja de las relaciones entre las Partes de estos Términos Legales será resuelta por un árbitro que será elegido de acuerdo con el Reglamento de Arbitraje y el Reglamento Interno de la Corte Europea de Arbitraje que forma parte del Centro Europeo de Arbitraje con sede en Estrasburgo, y que estén vigentes en el momento de la presentación de la solicitud de arbitraje.  y cuya adopción de esta cláusula constituye la aceptación. La sede del arbitraje será Madrid, España. La lengua de procedimiento será el inglés. Las normas de derecho sustantivo aplicables serán las de España.',
        termsOfUse129: 'Restricciones',
        termsOfUse130:
          'Las Partes acuerdan que cualquier arbitraje se limitará a la Disputa entre las Partes individualmente. En la medida en que lo permita la ley, (a) ningún arbitraje se unirá a ningún otro procedimiento; (b) no existe ningún derecho o autoridad para que cualquier Disputa sea arbitrada sobre la base de una demanda colectiva o para utilizar procedimientos de acción colectiva; y (c) no existe ningún derecho o autoridad para que cualquier Disputa se presente en una supuesta capacidad representativa en nombre del público en general o de cualquier otra persona.',
        termsOfUse131: 'Excepciones a las negociaciones informales y al arbitraje',
        termsOfUse132:
          'Las Partes acuerdan que las siguientes Disputas no están sujetas a las disposiciones anteriores relativas a las negociaciones informales de arbitraje vinculante: (a) cualquier Disputa que busque hacer cumplir o proteger, o que se refiera a la validez de cualquiera de los derechos de propiedad intelectual de una Parte; (b) cualquier Disputa relacionada con, o que surja de, alegaciones de robo, piratería, invasión de la privacidad o uso no autorizado; y c) cualquier reclamación de medidas cautelares. Si se determina que esta disposición es ilegal o inaplicable, ninguna de las Partes optará por arbitrar ninguna Disputa que se encuentre dentro de la parte de esta disposición que se considere ilegal o inaplicable y dicha Disputa será decidida por un tribunal de jurisdicción competente dentro de los tribunales enumerados anteriormente, y las Partes acuerdan someterse a la jurisdicción personal de ese tribunal.',
        termsOfUse133:
          'Puede haber información en los Servicios que contenga errores tipográficos, inexactitudes u omisiones, incluidas descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión y de cambiar o actualizar la información de los Servicios en cualquier momento, sin previo aviso.',
        termsOfUse134:
          'LOS SERVICIOS SE PROPORCIONAN EN EL ESTADO EN QUE SE ENCUENTRAN Y SEGÚN LA DISPONIBILIDAD. USTED ACEPTA QUE EL USO DE LOS SERVICIOS SERÁ BAJO SU PROPIO RIESGO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, EN RELACIÓN CON LOS SERVICIOS Y SU USO DE LOS MISMOS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. NO OFRECEMOS GARANTÍAS NI REPRESENTACIONES SOBRE LA EXACTITUD O INTEGRIDAD DEL CONTENIDO DE LOS SERVICIOS O EL CONTENIDO DE CUALQUIER SITIO WEB O APLICACIÓN MÓVIL VINCULADA A LOS SERVICIOS Y NO ASUMIREMOS NINGUNA RESPONSABILIDAD POR (1) ERRORES, EQUIVOCACIONES O INEXACTITUDES DEL CONTENIDO Y LOS MATERIALES, (2) LESIONES PERSONALES O DAÑOS A LA PROPIEDAD, DE CUALQUIER NATURALEZA,  COMO RESULTADO DE SU ACCESO Y USO DE LOS SERVICIOS, (3) CUALQUIER ACCESO O USO NO AUTORIZADO DE NUESTROS SERVIDORES SEGUROS Y/O TODA LA INFORMACIÓN PERSONAL Y/O FINANCIERA ALMACENADA EN ELLOS, (4) CUALQUIER INTERRUPCIÓN O CESE DE LA TRANSMISIÓN HACIA O DESDE LOS SERVICIOS, (5) CUALQUIER ERROR, VIRUS, TROYANO O SIMILAR QUE PUEDA SER TRANSMITIDO A O A TRAVÉS DE LOS SERVICIOS POR CUALQUIER TERCERO,  Y/O (6) CUALQUIER ERROR U OMISIÓN EN CUALQUIER CONTENIDO Y MATERIALES O POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DEL USO DE CUALQUIER CONTENIDO PUBLICADO, TRANSMITIDO O PUESTO A DISPOSICIÓN DE OTRO MODO A TRAVÉS DE LOS SERVICIOS. NO GARANTIZAMOS, RESPALDAMOS, GARANTIZAMOS NI ASUMIMOS RESPONSABILIDAD POR NINGÚN PRODUCTO O SERVICIO ANUNCIADO U OFRECIDO POR UN TERCERO A TRAVÉS DE LOS SERVICIOS, CUALQUIER SITIO WEB CON HIPERVÍNCULOS O CUALQUIER SITIO WEB O APLICACIÓN MÓVIL QUE APAREZCA EN CUALQUIER BANNER U OTRA PUBLICIDAD, Y NO SEREMOS PARTE NI SEREMOS RESPONSABLES DE NINGUNA MANERA DE MONITOREAR NINGUNA TRANSACCIÓN ENTRE USTED Y CUALQUIER PROVEEDOR EXTERNO DE PRODUCTOS O SERVICIOS. AL IGUAL QUE CON LA COMPRA DE UN PRODUCTO O SERVICIO A TRAVÉS DE CUALQUIER MEDIO O EN CUALQUIER ENTORNO, DEBE USAR SU MEJOR JUICIO Y TENER PRECAUCIÓN CUANDO CORRESPONDA.',
        termsOfUse135:
          'EN NINGÚN CASO NOSOTROS O NUESTROS DIRECTORES, EMPLEADOS O AGENTES SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR DAÑOS DIRECTOS, INDIRECTOS, CONSECUENTES, EJEMPLARES, INCIDENTALES, ESPECIALES O PUNITIVOS, INCLUIDO EL LUCRO CESANTE, LA PÉRDIDA DE INGRESOS, LA PÉRDIDA DE DATOS U OTROS DAÑOS QUE SURJAN DE SU USO DE LOS SERVICIOS, INCLUSO SI HEMOS SIDO ADVERTIDOS DE LA POSIBILIDAD DE DICHOS DAÑOS. SIN PERJUICIO DE CUALQUIER DISPOSICIÓN EN CONTRARIO CONTENIDA EN EL PRESENTE DOCUMENTO, NUESTRA RESPONSABILIDAD ANTE USTED POR CUALQUIER CAUSA E INDEPENDIENTEMENTE DE LA FORMA DE LA ACCIÓN, SE LIMITARÁ EN TODO MOMENTO A LA CANTIDAD PAGADA, SI LA HUBIERA, POR USTED A NOSOTROS DURANTE EL PERÍODO DE SEIS (6) MESES ANTES DE QUE SURJA CUALQUIER CAUSA DE ACCIÓN. CIERTAS LEYES ESTATALES DE EE. UU. Y LEYES INTERNACIONALES NO PERMITEN LIMITACIONES EN LAS GARANTÍAS IMPLÍCITAS O LA EXCLUSIÓN O LIMITACIÓN DE CIERTOS DAÑOS. SI ESTAS LEYES SE APLICAN A USTED, ES POSIBLE QUE ALGUNAS O TODAS LAS RENUNCIAS O LIMITACIONES ANTERIORES NO SE APLIQUEN A USTED, Y ES POSIBLE QUE TENGA DERECHOS ADICIONALES.',
        termsOfUse136:
          'Usted acepta defendernos, indemnizarnos y eximirnos de responsabilidad, incluidas nuestras subsidiarias, afiliadas y todos nuestros respectivos funcionarios, agentes, socios y empleados, de y contra cualquier pérdida, daño, responsabilidad, reclamo o demanda, incluidos los honorarios y gastos razonables de abogados, realizados por cualquier tercero debido a o que surjan de: (1) el uso de los Servicios; (2) incumplimiento de estos Términos Legales; (3) cualquier incumplimiento de sus declaraciones y garantías establecidas en estos Términos Legales; (4) su violación de los derechos de un tercero, incluidos, entre otros, los derechos de propiedad intelectual; o (5) cualquier acto dañino manifiesto hacia cualquier otro usuario de los Servicios con el que se haya conectado a través de los Servicios. Sin perjuicio de lo anterior, nos reservamos el derecho, a su cargo, de asumir la defensa y el control exclusivos de cualquier asunto por el que deba indemnizarnos, y usted acepta cooperar, a su cargo, con nuestra defensa de dichas reclamaciones. Haremos todos los esfuerzos razonables para notificarle de cualquier reclamo, acción o procedimiento que esté sujeto a esta indemnización al tener conocimiento de ello.',
        termsOfUse137:
          'Mantendremos ciertos datos que usted transmita a los Servicios con el fin de gestionar el rendimiento de los Servicios, así como los datos relacionados con su uso de los Servicios. Aunque realizamos copias de seguridad rutinarias periódicas de los datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado utilizando los Servicios. Usted acepta que no tendremos ninguna responsabilidad ante usted por cualquier pérdida o corrupción de dichos datos, y por la presente renuncia a cualquier derecho de acción contra nosotros que surja de dicha pérdida o corrupción de dichos datos.',
        termsOfUse138:
          'Visitar los Servicios, enviarnos correos electrónicos y completar formularios en línea constituyen comunicaciones electrónicas. Usted da su consentimiento para recibir comunicaciones electrónicas y acepta que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que le proporcionemos electrónicamente, por correo electrónico y en los Servicios, satisfacen cualquier requisito legal de que dicha comunicación sea por escrito. POR LA PRESENTE, USTED ACEPTA EL USO DE FIRMAS ELECTRÓNICAS, CONTRATOS, PEDIDOS Y OTROS REGISTROS, Y LA ENTREGA ELECTRÓNICA DE AVISOS, POLÍTICAS Y REGISTROS DE TRANSACCIONES INICIADAS O COMPLETADAS POR NOSOTROS O A TRAVÉS DE LOS SERVICIOS. Por la presente, usted renuncia a cualquier derecho o requisito en virtud de los estatutos, reglamentos, reglas, ordenanzas u otras leyes en cualquier jurisdicción que requieran una firma original o la entrega o retención de registros no electrónicos, o a los pagos o la concesión de créditos por cualquier medio que no sea electrónico.',
        termsOfUse139:
          'Estos Términos legales y cualquier política o regla operativa publicada por nosotros en los Servicios o con respecto a los Servicios constituyen el acuerdo completo y el entendimiento entre usted y nosotros. El hecho de que no ejerzamos o hagamos cumplir cualquier derecho o disposición de estos Términos legales no constituirá una renuncia a dicho derecho o disposición. Estos Términos Legales operan en la mayor medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No seremos responsables de ninguna pérdida, daño, demora o falta de acción causada por cualquier causa fuera de nuestro control razonable. Si se determina que alguna disposición o parte de una disposición de estos Términos legales es ilegal, nula o inaplicable, esa disposición o parte de la disposición se considera separable de estos Términos legales y no afecta la validez y aplicabilidad de las disposiciones restantes. No existe ninguna relación de empresa conjunta, sociedad, empleo o agencia creada entre usted y nosotros como resultado de estos Términos legales o del uso de los Servicios. Usted acepta que estos Términos Legales no se interpretarán en nuestra contra en virtud de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basadas en la forma electrónica de estos Términos Legales y la falta de firma por parte de las partes del presente para ejecutar estos Términos Legales.',
        termsOfUse140:
          'Para resolver una queja relacionada con los Servicios o para recibir más información sobre el uso de los Servicios, póngase en contacto con nosotros en:',
        termsOfUse141:
          'Al utilizar los Servicios, usted acepta estar sujeto a nuestra Política de privacidad, que se incorpora a estos Términos legales. Tenga en cuenta que los Servicios están alojados en España y el Reino Unido. Si accede a los Servicios desde cualquier otra región del mundo con leyes u otros requisitos que rigen la recopilación, el uso o la divulgación de datos personales que difieren de las leyes aplicables en España y el Reino Unido, entonces, a través de su uso continuado de los Servicios, está transfiriendo sus datos a España y Reino Unido, y acepta expresamente que sus datos se transfieran y procesen en España y Reino Unido.',
        wantToWorkWithUs: '¿Quieres trabajar con nosotros?',
        weAreLookingForCleaners: '¡Estamos buscando limpiadores dedicados para unirse a nuestro equipo en crecimiento!',
        sdlServiceDescription:
          'SDL es un nuevo servicio de limpieza a domicilio bajo demanda, disponible las 24 horas del día, los 7 días de la semana, que opera en Marbella y sus alrededores. Trabajando con nosotros, tendrás la flexibilidad de establecer tus propios horarios y radio de trabajo, ajustar tu disponibilidad en tiempo real y recibir el pago instantáneamente después de completar cada trabajo. Ofrecemos un alto potencial de ganancias a través de limpiezas rápidas, horas no estándar y referencias. SDL cumple totalmente con la normativa, está asegurado y contribuye a la seguridad social.',
        seeDetails: 'Ver detalles',
        'Payment reminder': 'Recordatorio de pago',
        'Cleaning reminder': 'Recordatorio de limpieza',
        'You have a scheduled service for': 'Tiene un servicio programado para',
        'Cleaning started': 'Limpieza iniciada',
        'Your scheduled cleaning has started.': 'Su limpieza programada ha comenzado',
        'In order to proceed with your scheduled service we kindly request that payment be made 48 hours in advance. Kindly see invoice sent to your email.':
          'Para proceder con su servicio programado, solicitamos amablemente que el pago se realice 48 horas antes. Por favor, consulte la factura enviada a su correo electrónico.',
        'Cleaning cancelled': 'Limpieza cancelada',
        'We regret to inform you that your scheduled cleaning has been cancelled. Rest assured, we are working to find another cleaner and will update you shortly.':
          'Lamentamos informarle que su limpieza programada ha sido cancelada. Tenga la seguridad de que estamos trabajando para encontrar otro limpiador y le actualizaremos en breve.',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
