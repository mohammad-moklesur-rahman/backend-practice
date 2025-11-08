import admin from "firebase-admin";
// import serviceAccount from "../../client-site-firebase-adminsdk.json" with { type: "json" };

// decoded
const decoded = Buffer.from(process.env.FIREBASE_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);

// ✅ Initialize Firebase Admin SDK once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorize acces" });
  }
  const firebaseToken = req.headers.authorization.split(" ")[1];
  if (!firebaseToken) {
    return res.status(401).send({ message: "Unauthorize acces" });
  }

  // * Verify firebase token
  try {
    await admin.auth().verifyIdToken(firebaseToken);
    next();
  } catch {
    return res.status(403).json({ message: "Forbidden acces" });
  }

  
};
