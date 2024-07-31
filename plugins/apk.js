import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) throw 'مثال:\n ' + usedPrefix + command + ' facebook';
  let info = await apkinfo(text);
  let res = await apk(text);


        if (res.size > 993000000) {
            m.react(error)
            throw '*ملف APK كبير جدًا. الحد الأقصى لحجم التنزيل هو 150 ميجا بايت*.';
          }


  await conn.sendMessage(m.chat, {
    image: { url: info.icon },
    caption: `*📊إسم التطبيق :* \n${info.name}\n*📦الباكيدج الخاص به :* \n${info.packageN}\n*ملف ثانوي للتطبيق:* \n*OBB*\n${info.obb_link}`,
    footer: '_Apk files..._',
  });

  await conn.sendMessage(m.chat, {
    text: `*جاري تحميل* ${info.name}...\n\n*تسنا واحد شوية ويصيفط ليك البوت التطبيق لي بغيتي راه كيتعطل شوية ومتكترش عليه 😄❤️*`,
  });

  await conn.sendMessage(
    m.chat,
    { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName },
    { quoted: m }
  );
};

handler.command = /^(تطبيق)$/i;
handler.help = ['تطبيق'];
handler.tags = ['downloader'];
handler.premium = false
export default handler;

async function apkinfo(url) {
  let res = await fetch('http://ws75.aptoide.com/api/7/apps/search?query=' + url + '&limit=1');
  let $ = await res.json();

  try {
    let icon = $.datalist.list[0].icon;
  } catch {
    throw '*تعذر تحميل التطبيق انا اسف*';
  }

  let icon = $.datalist.list[0].icon;
  let name = $.datalist.list[0].name;
  let packageN = $.datalist.list[0].package;
  let download = $.datalist.list[0].file.path;
  let obb_link;
  let obb;

  try {
    obb_link = await $.datalist.list[0].obb.main.path;
    obb = true;
  } catch {
    obb_link = '_غير موجود_';
    obb = false;
  }

  if (!download) throw '*تعذر تحميل التطبيق انا اسف*';
  return { obb, obb_link, name, icon, packageN };
}

async function apk(url) {
  let res = await fetch('http://ws75.aptoide.com/api/7/apps/search?query=' + encodeURIComponent(url) + '&limit=1');
  let $ = await res.json();
  let fileName = $.datalist.list[0].package + '.apk';
  let download = $.datalist.list[0].file.path;
  let size = (await fetch(download, { method: 'head' })).headers.get('Content-Length');
  if (!download) throw 'Can\'t download the apk!';
  let icon = $.datalist.list[0].icon;
  let mimetype = (await fetch(download, { method: 'head' })).headers.get('content-type');

  return { fileName, mimetype, download, size };
}
