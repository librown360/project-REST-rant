# Project REST-Rant

## Description
REST-Rant is an app where users can review restaurants.

## Routes

| Method | Path | Purpose |
| :---: | :---: | :--- |
| GET | / | Homepage |
| GET | /places | Index page listing all places |
| GET | /places/new | Form to create a new place |
| POST | /places | Create a new place |
| GET | /places/:id | Show page containing details for a specific place (including a comment form to post rants) |
| GET | /places/:id/edit | Edit form for a place |
| PUT | /places/:id | Make changes to an existing place |
| DELETE | /places/:id | Delete an existing place |
| POST | /places/:id/rant | Post a rant (comment) about a specific place |
| DELETE | /places/:id/rant/:id | Delete an existing rant (comment) |

## Places Data

|  Variable | Data Type |
| --- | --- |
| name | string |
| city | string |
| state | string |
| cuisines | string |
| pic | string |

