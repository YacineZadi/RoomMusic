**Music-Controller-Web-App**
A Web Application that allow the users to control the music using Spotify API.
## Setup Instructions

### get your Spotify Credential
go to credentials.py and enter your unique credentials.
```bash
CLIENT_ID = ""
CLIENT_SECRET = ""
```

### Install Required Python Modules

```bash
pip install -r requirements.txt
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```
