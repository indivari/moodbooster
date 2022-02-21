# Moodbooster - An individual project applying different areas of knowledge

This project doesn't focus on a lot of features, but rather focuses on applying a lot of technical concerns I have learned over the course and finding best practices to them.

## Features

Moodbooster is a platform where users can find insipirations quotes that match their interests.

Users can,

- Post their quotes
- Tag them to different groups
- Vote on quotes by others
- Change and delete their own quotes
- Search for quotes by tags

## Technical concerns

- Authentication with OAuth with Facebook and Github auth. This uses `passport` for authentication with different strategies.
- MongoDb for document database. It's easier to change schema quickly.
- Mongoose ORM for abstracting connection to MongoDb.
- `Styled Components` for CSS styling. Because styles live in the same place as the component, reuse styles, create style mixes that work as functions with parameters. All in all, styled components are very extendable.
- CSS Grid for card layout
- Flexbox for other flow layouts

## Things to do

- [x] Authentication with passport
- [x] CRUD quotes
- [x] Tag quotes with hashtags
- [x] Filter quotes by tags
- [x] Filter quotes by user
- [x] Order quotes by number of votes
- [x] Use Context to manage state. This avoids multiple copies of state in different places.
- [x] Use `react-router` for single page routing
- [ ] Authorisation for all endpoints
- [ ] Test coverage
- [ ] Connect to external API for adding more quotes. Ex. zenquotes
- [ ] Frontend and backend validation for data
