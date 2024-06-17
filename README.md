# PHASE 3 FINAL PROJECT

**A clinic management system**

# Technologies used:
1. React (Javascript library)
2. Flask (Python framework)
3. ORM/sqlite3

Hosted on : 

- Backend (render.com) => https://phase3-project-aw4o.onrender.com/ 

- Frontend (vercel.com) => https://phase3-project-jet.vercel.app/


# How to get started locally:

```
git clone https://github.com/raykorir/phase3_project/ && cd phase3_project
```
Open 2 terminals side by side

Let's start with the backend, ensure you have `python 3.8` installed in your system, else chechout https://github.com/pyenv/pyenv?tab=readme-ov-file#automatic-installer
```
cd backend
```
```
pipenv install && pipenv shell
```
Populate the database with sample data
```
python seed.py
```
Then run the server/api and you will see hello world on http://localhost:5555 to confirm everything is working finr
```
python app.py
```

Leave that running and cd to the frontend

```
cd frontend
```
Ensure you have `node v18`
```
npm install
```
```
npm run start
```

Make changes to where the frontend is fetching data from e.g

