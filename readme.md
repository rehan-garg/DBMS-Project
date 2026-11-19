# Group 2 Video Platform Backend

This Node.js and Express backend uses MongoDB and Mongoose. Its data model follows the normalized design documented in `info.docx`: users, videos, playlists, playlist-video membership, watch-history events, comments, video likes, comment likes, tweets, tweet likes, and subscriptions are stored in separate collections.

## Run locally

1. Copy `.env.sample` to `.env` and set the MongoDB URI, database name, JWT secrets, and Cloudinary credentials.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

The server listens on `PORT` (default `8000`).

## Model notes

- Playlist membership is stored in `playlistVideos`, with unique playlist/video and playlist/position pairs.
- Like collections use unique user/target pairs to prevent duplicate likes.
- Watch history is event-based, so a user can watch the same video more than once.
- Subscriptions use a unique subscriber/channel pair and reject self-subscriptions.
- Mongoose timestamps supply `createdAt` and `updatedAt` for entities that have both in the ER design.
