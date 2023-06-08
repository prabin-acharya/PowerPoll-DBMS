## About PowerPoll

PowerPoll is an open-source platform where you can create polls, share them to get votes, and finally analyze them in the dashboard. See the number of votes on each answer, votes on each day, votes from different devices, and much more!
Built by:

- Prabin Acharya
- Sagar Tandan
- Sanjeev Rawal
- Nishan Thing

## 🚩 The Problem

Now, we know there are already a lot of **poll makers** in the market. They lack in one big thing, analytics and that's where **PowerPoll** can help you. we used some of the poll makers out there and came to know that they don't have great analytics like we don't know from where the votes are coming, when are we getting the most votes, how many votes we got today, yesterday, or the day before yesterday, are we getting votes from mobile, desktop or tablet.

## 💡 The Idea

That's where we came up with the idea of **PowerPoll**. It not only lets you build and share polls but also provides user-friendly charts for analyzing the polls. we was thinking to build such kind of app way before this hackathon. But when we heard about this hackathon, we was very motivated to build it.

Here are some reasons why we built this project:

- To complete the entire project. we usually leave my projects incomplete in the middle. This hackathon really pushed me towards completing the entire project.
- To learn something new. This project helped me learn some new technologies like PlanetScale and Prisma.

## 🧱 Project Structure

```
-- components
    -- AnalyticsBox
    -- DashboardLayout
    -- Features
    -- Footer
    -- Header
    -- Hero
    -- HomeLayout
    -- Navbar
    -- Poll
    -- PollCustomize
    -- PollItem
    -- PollMaker
    -- PollManager
    -- PollSettings
    -- Seo
    -- SharePoll
-- context
    -- PollContext
    -- UserContext
-- lib
    -- getUser
    -- prisma
-- pages
    -- api
        -- auth
        -- polls
        -- votes
    -- dashboard
        -- analytics
        -- edit-poll
        -- create-poll
        -- index
        -- polls
    -- poll
    -- _app
    -- _document
    -- index
    -- login
    -- signup
-- prisma
    -- schema.prisma
-- src
-- styles
-- utils
```

## 🤖 Future Enhancements

These are some features that we thought of adding but was unable to do so. However, we will definitely add them in the future:

1. Dark mode.
1. Add images in the poll.
1. Add a description in the poll.
1. Ability to embed the polls in websites using iframe or some other technique.
