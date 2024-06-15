// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // const { password, phone } = req.body;

  // const headersList = {
  //   Accept: "*/*",
  //   "User-Agent": "TAPIN (https://www.tapin.com)",
  //   "Content-Type": "application/json",
  // };

  // let bodyContent = JSON.stringify({
  //   password: password,
  //   phone: phone,
  // });

  // let response = await fetch(`${process.env.USER_API_LINK}/login/`, {
  //   method: "POST",
  //   body: bodyContent,
  //   headers: headersList,
  // });

  // let data = await response.json();
  // console.log(data)
  // res.send({
  //   status: data.status,
  //   redirect_link:
  //     data?.status === 200
  //       ? `${process.env.DASHBOARD_LINK}/user?_id=${data?.data.user_id}`
  //       : null,
  // });
  // console.log(data);
  res.redirect(`${process.env.DASHBOARD_LINK}/login`);
}
