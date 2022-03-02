# PWAShifts
Basic PoC to show how to handle push notification in a PWA
This example is based on [this resource](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)

# Overview
This project was created with:
- Create React App using the PWA template that adds the `service-worker.js` and `serviceWorkerRegistration.js` files;
- [Pico.css](https://picocss.com/docs/classless.html) for styling using the classless version.

## Registration flow
1) First, the PWA checks the notification permission: if the permission has the default value, then it asks the user for permission;
2) If permissions are granted, the PWA checks for an existing subscription in the `pushManager`: if the subscription does not exist, the PWA obtains the public key from the server and creates the subscription;
3) In any case (regardless of whether the subscription exists or not) the PWA sends the subscription details to the server.

This flow is managed by a special hook: `useNotification`.

## Handle push notifications
There is a special listener in the `service-worker.js` file for the `push` event which handles push notifications from the server.

## Get the turns
Changing the date in the application updates the status of the main component: to react to this change, the client retrieves the information about the shifts for the selected date and updates the user interface using new data.

# Getting started
Run the following command: `yarn install && yarn start`
