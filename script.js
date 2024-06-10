"use strict";

const trymap = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
    );
    const data = await res.json();
    const news = data.news;

    const newdata = news.map((news) => ({
      titleohyeah: news.title,
    }));

    console.log(`this is title ${newdata.map((newwww) => newwww.titleohyeah)}`);
  } catch (error) {
    console.log(error);
  }
};

trymap();
