MongoDB is a popular, open-source **NoSQL** database. Unlike traditional databases (like MySQL or PostgreSQL) that store data in rigid tables with rows and columns, MongoDB stores data in flexible, JSON-like documents.

---

## Key Concepts

To understand MongoDB, it helps to compare it to the relational databases (SQL) you might already know:

|SQL Concept|MongoDB Equivalent|Notes|
|---|---|---|
|**Database**|**Database**|The container for your data.|
|**Table**|**Collection**|A group of MongoDB documents.|
|**Row**|**Document**|A single record (stored in BSON format).|
|**Column**|**Field**|A key-value pair within a document.|

Export to Sheets

### Why use it?

- **Flexibility:** Every document in a collection can have a different structure. You can add new fields without "breaking" the database.
    
- **Scalability:** It’s designed to be distributed across many servers easily (horizontal scaling).
    
- **Speed:** Since related data is often stored together in one document, you don't have to perform complex "joins" as often.
    

---

## What a Document Looks Like

MongoDB uses **BSON** (Binary JSON). Here is an example of how a "User" might be stored:

JSON

```
{
  "_id": "64a7b12e9f1b2c3d4e5f6g7h",
  "username": "GooseCoder",
  "email": "yuvraj@example.com",
  "skills": ["React", "Node.js", "Java"],
  "projects": [
    { "name": "ClientPulse", "status": "Active" },
    { "name": "Nexcore MC", "status": "Development" }
  ],
  "active": true
}
```

---
