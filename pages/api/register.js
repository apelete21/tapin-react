// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { firstName, email, lastName, org, password, phone } = req.body;

  const headersList = {
    Accept: "*/*",
    "User-Agent": "TAPIN (https://www.tapin.com)",
    "Content-Type": "application/json",
  }; 

  let bodyContent = JSON.stringify({
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    org: org,
    phone: phone,
    role: "user",
  });

  let response = await fetch(`${process.env.USER_API_LINK}/signup/`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  res.send({ status: data.status, email: data?.data.email });
  console.log(data);
}
