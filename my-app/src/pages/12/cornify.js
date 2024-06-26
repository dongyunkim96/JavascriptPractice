let cornify_count = 0;

export const cornify_add = function (options) {
  cornify_count += 1;
  const cornify_url = "https://www.cornify.com/";
  const numType = "px";
  let heightRandom = Math.random() * 0.75;
  let windowHeight = 768;
  let windowWidth = 1024;
  let height = 0;
  let width = 0;
  let de = document.documentElement;
  let transform = "translate(-50%, -50%)";
  const showGrandUnicorn = cornify_count == 15;

  const div = document.createElement("div");
  div.style.position = "fixed";
  div.className = "__cornify_unicorn";
  div.style.zIndex = 143143;
  div.style.outline = 0;
  div.onclick = cornify_add;

  if (typeof window.innerHeight == "number") {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  } else if (de && de.clientHeight) {
    windowHeight = de.clientHeight;
    windowWidth = de.clientWidth;
  } else {
    height = Math.round(height * 100) + "%";
  }

  if (showGrandUnicorn) {
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.zIndex = 143143143;
  } else {
    div.style.top = Math.round(Math.random() * 100) + "%";
    div.style.left = Math.round(Math.random() * 100) + "%";
    transform += " rotate(" + Math.round(Math.random() * 10 - 5) + "deg)";
  }

  const img = document.createElement("img");
  img.style.opacity = 0;
  img.style.transition = "all .1s linear";
  img.alt = "A lovely unicorn or rainbow";
  img.onload = function () {
    img.style.opacity = 1;
  };

  const currentTime = new Date();
  let submitTime = currentTime.getTime();

  if (showGrandUnicorn) {
    submitTime = 0;
  }

  const url = `https://www.cornify.com/corns/${
    Math.random() > 0.5 ? "r" : "u"
  }${Math.ceil(Math.random() * 7)}.gif`;

  if (options && (options.y || options.younicorns)) {
    url += "&y=" + (options.y ? options.y : options.younicorns);
    if (Math.random() > 0.5) {
      if (transform.length > 0) {
        transform += " scaleX(-1)";
      }
    }
  }

  div.style.transform = transform;
  div.style.MozTransform = transform;
  div.style.webkitTransform = transform;

  img.setAttribute("src", url);
  img.style.transition = "all .1s linear";

  div.onmouseover = function () {
    const size = 1 + Math.round(Math.random() * 10) / 100;
    const angle = Math.round(Math.random() * 20 - 10);
    const result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    img.style.transform = result;
    img.style.MozTransform = result;
    img.style.webkitTransform = result;
  };

  div.onmouseout = function () {
    const size = 0.9 + Math.round(Math.random() * 10) / 100;
    const angle = Math.round(Math.random() * 6 - 3);
    const result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    img.style.transform = result;
    img.style.MozTransform = result;
    img.style.webkitTransform = result;
  };

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
  div.appendChild(img);

  if (cornify_count == 5) {
    let cssExisting = document.getElementById("__cornify_css");
    if (!cssExisting) {
      const head = document.getElementsByTagName("head")[0];
      const css = document.createElement("link");
      css.id = "__cornify_css";
      css.type = "text/css";
      css.rel = "stylesheet";
      css.href = "https://www.cornify.com/css/cornify.css";
      css.media = "screen";
      head.appendChild(css);
    }
    cornify_replace();
  }

  cornify_updatecount();
  const event = new Event("cornify");
  document.dispatchEvent(event);
};

const cornify_updatecount = function () {
  const id = "__cornify_count";
  let p = document.getElementById(id);

  if (p == null) {
    p = document.createElement("p");
    p.id = id;
    p.style.position = "fixed";
    p.style.bottom = "5px";
    p.style.left = "0px";
    p.style.right = "0px";
    p.style.zIndex = "1000000000";
    p.style.color = "#ff00ff";
    p.style.textAlign = "center";
    p.style.fontSize = "24px";
    p.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif";
    p.style.textTransform = "uppercase";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(p);
  }

  if (cornify_count == 1) {
    p.innerHTML = "You cornified!";
  } else {
    p.innerHTML = "You cornified " + cornify_count + " times!";
  }

  cornify_setcookie("cornify", cornify_count + "", 1000);
};

const cornify_setcookie = function (name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + "; " + expires;
};

const cornify_getcookie = function (cname) {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

cornify_count = parseInt(cornify_getcookie("cornify"));
if (isNaN(cornify_count)) {
  cornify_count = 0;
};

const cornify_replace = function () {
  let headerTypeIndex = 6;
  let headerElements;
  let headerElement;
  const magicalWords = [
    "Happy",
    "Sparkly",
    "Glittery",
    "Fun",
    "Magical",
    "Lovely",
    "Cute",
    "Charming",
    "Amazing",
    "Wonderful",
  ];

  while (headerTypeIndex >= 1) {
    headerElements = document.getElementsByTagName("h" + headerTypeIndex);
    for (let i = 0; i < headerElements.length; i++) {
      headerElement = headerElements[i];
      headerElement.innerHTML =
        magicalWords[Math.floor(Math.random() * magicalWords.length)] +
        " " +
        headerElement.innerHTML;
    }
    headerTypeIndex -= 1;
  }
};