/**
 * 酷Q用公共函数
 */
const { isInGoogle, gcj_wgs_bored, gcj_bd, coordsRound } = require('ishisashimap');

const faces = {
    0: '惊讶', 1: '撇嘴', 2: '色', 3: '发呆', 4: '得意', 5: '流泪', 6: '害羞', 7: '闭嘴', 8: '睡', 9: '大哭',
    10: '尴尬', 11: '发怒', 12: '调皮', 13: '呲牙', 14: '微笑', 15: '难过', 16: '酷', 17: '非典', 18: '抓狂', 19: '吐',
    20: '偷笑', 21: '可爱', 22: '白眼', 23: '傲慢', 24: '饥饿', 25: '困', 26: '惊恐', 27: '流汗', 28: '憨笑', 29: '悠闲',
    30: '奋斗', 31: '咒骂', 32: '疑问', 33: '嘘……', 34: '晕', 35: '折磨', 36: '衰', 37: '骷髅', 38: '敲打', 39: '再见',
    40: '闪人', 41: '发抖', 42: '爱情', 43: '跳跳', 44: '找', 45: '美眉', 46: '猪头', 47: '猫咪', 48: '小狗', 49: '拥抱',
    50: '钱', 51: '灯泡', 52: '酒杯', 53: '蛋糕', 54: '闪电', 55: '炸弹', 56: '刀', 57: '足球', 58: '音乐', 59: '便便',
    60: '咖啡', 61: '饭', 62: '药丸', 63: '玫瑰', 64: '凋谢', 65: '吻', 66: '爱心', 67: '心碎', 68: '会议', 69: '礼物',
    70: '电话', 71: '时间', 72: '邮件', 73: '电视', 74: '太阳', 75: '月亮', 76: '赞', 77: '踩', 78: '握手', 79: '胜利',
    80: '多多', 81: '美女', 82: '汉良', 83: '毛毛', 84: 'Q 仔', 85: '飞吻', 86: '怄火', 87: '白酒', 88: '汽水', 89: '西瓜',
    90: '下雨', 91: '多云', 92: '雪人', 93: '星星', 94: '女', 95: '男', 96: '冷汗', 97: '擦汗', 98: '抠鼻', 99: '鼓掌',
    100: '糗大了', 101: '坏笑', 102: '左哼哼', 103: '右哼哼', 104: '哈欠', 105: '鄙视', 106: '委屈', 107: '快哭了', 108: '阴险', 109: '亲亲',
    110: '吓', 111: '可怜', 112: '菜刀', 113: '啤酒', 114: '篮球', 115: '乒乓', 116: '示爱', 117: '瓢虫', 118: '抱拳', 119: '勾引',
    120: '拳头', 121: '差劲', 122: '爱你', 123: 'NO', 124: 'OK', 125: '转圈', 126: '磕头', 127: '回头', 128: '跳绳', 129: '挥手',
    130: '激动', 131: '街舞', 132: '献吻', 133: '左太极', 134: '右太极', 135: '招财进宝', 136: '双喜', 137: '鞭炮', 138: '灯笼', 139: '发财',
    140: 'K 歌', 141: '购物', 142: '邮件', 143: '帅', 144: '喝彩', 145: '祈祷', 146: '爆筋', 147: '棒棒糖', 148: '喝奶', 149: '下面',
    150: '香蕉', 151: '飞机', 152: '开车', 153: '高铁左车头', 154: '车厢', 155: '高铁右车头', 156: '多云', 157: '下雨', 158: '钞票', 159: '熊猫',
    160: '灯泡', 161: '风车', 162: '闹钟', 163: '打伞', 164: '彩球', 165: '钻戒', 166: '沙发', 167: '纸巾', 168: '药', 169: '手枪',
    170: '青蛙', 171: '茶', 172: '眨眼睛', 173: '泪奔', 174: '无奈', 175: '卖萌', 176: '小纠结', 177: '喷血', 178: '斜眼笑', 179: 'Doge',
    180: '惊喜', 181: '骚扰', 182: '笑哭', 183: '我最美', 184: '河蟹', 185: '羊驼', 186: '栗子', 187: '幽灵', 188: '蛋', 189: '马赛克',
    190: '菊花', 191: '肥皂', 192: '红包', 193: '大笑', 194: '不开心', 195: '啊', 196: '惶恐', 197: '冷漠', 198: '呃', 199: '好棒',
    200: '拜托', 201: '点赞', 202: '无聊', 203: '托脸', 204: '吃', 205: '送花', 206: '害怕', 207: '花痴', 208: '小样儿', 209: '脸红',
    210: '飙泪', 211: '我不看', 212: '托腮', 213: '哇哦', 214: '啵啵', 215: '糊脸', 216: '拍头', 217: '扯一扯', 218: '舔一舔', 219: '蹭一蹭',
    220: '拽炸天', 221: '顶呱呱', 222: '抱抱', 223: '暴击', 224: '开枪', 225: '撩一撩', 226: '拍桌', 227: '拍手', 228: '恭喜', 229: '干杯',
    230: '嘲讽', 231: '哼', 232: '佛系', 233: '掐一掐', 234: '惊呆', 235: '颤抖', 236: '啃头', 237: '偷看', 238: '扇脸', 239: '原谅',
    240: '喷脸', 241: '生日快乐',
};

/**
 * 去除接收訊息中的 CQ 碼（酷 Q 專用碼，包括表情、繪文字、相片等資料），將其換為「[表情名稱]」、「[图片]」等文字
 * @param  {string} Message 已解碼並轉為 UTF-8 之後的訊息
 * @return {string} 去除 CQ 碼之後的文字
 */
const parseMessage = (message) => {
    let images = [];
    let records = [];
    let at = [];
    let coords = {};
    let text = ''

    if (typeof message === "string") {
        text = message.replace(/\n/gu, '&#10;').replace(/\[CQ:([^,]*?)\]/gu, '[CQ:$1,]').replace(/\[CQ:(.*?)((?:,).*?)\]/gu, (_, type, param) => {
            let tmp;
            let tmp1;
            let tmp2;
            let tmp3;
            switch (type) {
                case 'face':
                    // [CQ:face,id=13]
                    tmp = param.match(/(?:^|,)id=(.*?)(?:,|$)/u);
                    if (tmp && tmp[1]) {
                        return `[${faces[parseInt(tmp[1])]}]`;
                    } else {
                        return '[表情]';
                    }

                case 'emoji':
                    // [CQ:emoji,id=128052]
                    tmp = param.match(/(?:^|,)id=(.*?)(?:,|$)/u);
                    if (tmp && tmp[1]) {
                        return String.fromCodePoint(tmp[1]);
                    } else {
                        return '[绘文字]';
                    }

                case 'bface':
                    // [CQ:bface,p=10278,id=42452682486D91909B7A513B8BFBC3C6]
                    // TODO 取得表情內容
                    return '[原创表情]';

                case 'sface':
                    // [CQ:sface,id=851970]
                    // TODO 取得表情內容
                    return '[小表情]';

                case 'image':
                    // [CQ:image,file=0792531B8B74FE6F86B87ED6A3958779.png]
                    tmp = param.match(/(?:^|,)file=(.*?)(?:,|$)/u);
                    if (tmp && tmp[1]) {
                        images.push(tmp[1]);
                        return '[图片]';
                    } else {
                        return '[图片]';
                    }

              case 'rich':
                  // 分享音樂 [CQ:rich,url=http://music.163.com/song/504733843/?userid=263400453,text= 新宝島 BENI ]
                  // 協議不支援 [CQ:rich,text=QQ天气提示 升级QQ查看天气]
                  tmp1 = param.match(/(?:^|,)text=(.*?)(?:,|$)/u);
                  tmp2 = param.match(/(?:^|,)url=(.*?)(?:,|$)/u);
                  if (tmp2 && tmp2[1]) {
                      tmp = ['[分享]'];
                      if (tmp1 && tmp1[1]) {
                          tmp.push(tmp1[1]);
                      }
                      tmp.push(tmp2[1]);
                      return tmp.join('\n');
                  } else if (tmp2 && tmp2[1]) {
                      return tmp2[1];
                  } else {
                      return '[富文本]';
                  }

                case 'record':
                    // 一般語音 [CQ:record,file=C091016F9A0CCFF1741AF0B442BD4F70.silk]
                    // 領取語音紅包 [CQ:record,file=C091016F9A0CCFF1741AF0B442BD4F70.silk,hb=true]
                    // 依據客户端之不同，可能是 silk，也可能是 amr
                    tmp = param.match(/(?:^|,)file=(.*?)(?:,|$)/u);
                    if (tmp && tmp[1]) { records.push(tmp[1]); }
                    return '[语音]';

                case 'at':
                    // [CQ:at,qq=1145759243]
                    tmp = param.match(/(?:^|,)qq=(.*?)(?:,|$)/u);
                    if (tmp && tmp[1]) {
                        if (tmp[1] === 'all') {
                            return '@全体成员';
                        } else {
                            at.push(parseInt(tmp[1]));
                            return `@${tmp[1]}`;                // 只給出 QQ 號，至於應該 @ 什麼內容，讓使用者處理吧
                        }
                    } else {
                        return '[at]';
                    }

                case 'share':
                    // [CQ:share,url=http://www.bilibili.com/video/av42585280?share_medium=android&amp;share_source=qq&amp;bbid=XZ97F38904CBFC1747BFE02321AFCB3A3D933&amp;ts=1549692084426,title=三天之内,content=给生活找点乐子~,image=http://url.cn/5AEq2ju]
                    tmp = ['[分享]'];
                    tmp1 = param.match(/(?:^|,)title=(.*?)(?:,|$)/u);
                    tmp2 = param.match(/(?:^|,)content=(.*?)(?:,|$)/u);
                    tmp3 = param.match(/(?:^|,)url=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1]) {
                        tmp.push(tmp1[1]);
                    }
                    if (tmp2 && tmp2[1]) {
                        tmp.push(tmp2[1]);
                    }
                    if (tmp3 && tmp3[1]) {
                        tmp.push(tmp3[1]);
                    }
                    return tmp.join('\n');

                case 'hb':
                    // [CQ:hb,title=恭喜发财]
                    tmp = ['[红包]'];
                    tmp1 = param.match(/(?:^|,)title=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1]) {
                        tmp.push(tmp1[1]);
                    }
                    return tmp.join('\n');

                case 'sign':
                    // [CQ:sign,title=我过来签个到啦,image=https://p.qpic.cn/qunsign/0/sign_30cc0f793397325b74be99fabd5f9cfcjs0qje77/750]
                    tmp = ['[签到]'];
                    tmp1 = param.match(/(?:^|,)title=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1]) {
                        tmp.push(tmp1[1]);
                    }
                    return tmp.join('\n');

                case 'location':
                    // [CQ:location,lat=23.081961,lon=113.453941,title=大吉沙,content=广东省广州市黄埔区,style=1]
                    tmp = ['[位置]'];
                    tmp1 = param.match(/(?:^|,)title=(.*?)(?:,|$)/u);
                    tmp2 = param.match(/(?:^|,)content=(.*?)(?:,|$)/u);
                    tmp3 = param.match(/(?:^|,)lat=(.*?)(?:,|$)/u);
                    let tmp4 = param.match(/(?:^|,)lon=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1]) {
                        tmp.push(tmp1[1]);
                    }
                    if (tmp2 && tmp2[1]) {
                        tmp.push(tmp2[1]);
                    }
                    if (tmp3 && tmp3[1] && tmp4 && tmp4[1]) {
                        let incoords = { lat: Number(tmp3[1]), lon: Number(tmp4[1]) };
                        if (isInGoogle(incoords)) {
                            let wgs = gcj_wgs_bored(incoords, false);
                            let bd = gcj_bd(incoords, false);
                            coords.wgs = wgs;
                            coords.gcj = incoords;
                            coords.bd = bd;
                            // 非原始數據比原始數據多保留一位
                            wgs = coordsRound(wgs, 7);
                            bd = coordsRound(bd, 7);
                            tmp.push(`WGS-84: ${wgs.lat},${wgs.lon}`, `GCJ-02: ${incoords.lat},${incoords.lon}`, `BD-09: ${bd.lat},${bd.lon}`);
                        } else {
                            coords.wgs = incoords;
                            tmp.push(`WGS-84: ${incoords.lat},${incoords.lon}`);
                        }
                    }
                    return tmp.join('\n');

                case 'contact':
                    // 群邀請 [CQ:contact,id=609486016,type=group]
                    // 好友邀請 [CQ:contact,id=1145759243,type=qq]
                    tmp1 = param.match(/(?:^|,)id=(.*?)(?:,|$)/u);
                    tmp2 = param.match(/(?:^|,)type=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1] && tmp2 && tmp2[1] === 'group') {
                        tmp = ['[群邀请]'];
                        if (tmp1 && tmp1[1]) {
                            tmp.push(tmp1[1]);
                        }
                        return tmp.join('\n');
                    } else if (tmp1 && tmp1[1] && tmp2 && tmp2[1] === 'qq') {
                        tmp = ['[好友邀请]'];
                        if (tmp1 && tmp1[1]) {
                            tmp.push(tmp1[1]);
                        }
                        return tmp.join('\n');
                    } else {
                        return '[邀请]';
                    }

                case 'music':
                    // 外鏈 [CQ:music,type=custom,url=https://kg3.qq.com/node/play?s=tddsOFtqHK4YxtGy&amp;shareuid=66999e87222a308c36&amp;topsource=a0_pn201001004_z11_u443277772_l1_t1551967343__,title=翅膀,content=我唱了一首歌，快来听听吧。,image=http://url.cn/478RlhQ,audio=http://url.cn/5ICzaEj]
                    // 網易雲 [CQ:music,type=163,id=509842]
                    // QQ 音樂 [CQ:music,type=qq,id=200732275]
                    // 蝦米 [CQ:music,type=xiami,id=1769370187]
                    tmp = ['[分享音乐]'];
                    tmp1 = param.match(/(?:^|,)type=(.*?)(?:,|$)/u);
                    tmp2 = param.match(/(?:^|,)url=(.*?)(?:,|$)/u);
                    tmp3 = param.match(/(?:^|,)id=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1] === 'custom') {
                        if (tmp2 && tmp2[1]) {
                            tmp.push(tmp2[1]);
                        }
                    } else if (tmp1 && tmp1[1] === '163') {
                        if (tmp3 && tmp3[1]) {
                            tmp.push(`https://music.163.com/#/song?id=${tmp3[1]}`);
                        }
                    } else if (tmp1 && tmp1[1] === 'qq') {
                        if (tmp3 && tmp3[1]) {
                            tmp.push(`https://y.qq.com/n/yqq/song/${tmp3[1]}_num.html`);
                        }
                    } else if (tmp1 && tmp1[1] === 'xiami') {
                        if (tmp3 && tmp3[1]) {
                            tmp.push(`https://www.xiami.com/song/${tmp3[1]}`);
                        }
                    }
                    return tmp.join('\n');

                case 'rps':
                    // [CQ:rps,type=1]
                    tmp = ['[猜拳]'];
                    tmp1 = param.match(/(?:^|,)type=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1] === '1') {
                        tmp.push('石头');
                    } else if (tmp1 && tmp1[1] === '2') {
                        tmp.push('剪刀');
                    } else if (tmp1 && tmp1[1] === '3') {
                        tmp.push('布');
                    }
                    return tmp.join('\n');

                case 'dice':
                    // [CQ:dice,type=1]
                    tmp = ['[骰子]'];
                    tmp1 = param.match(/(?:^|,)type=(.*?)(?:,|$)/u);
                    if (tmp1 && tmp1[1]) {
                        tmp.push(tmp1[1]);
                    }
                    return tmp.join('\n');

                case 'shake':
                    // [CQ:shake]
                    // 戳一戳，即窗口抖动
                    return '[戳一戳]';

                default:
                    return '';
            }
        }).replace(/&#10;/gu, '\n');

      } else if (message instanceof Array) {
        // cqhttpapi在消息上報使用array格式可以分成消息段，不須手動轉義CQ碼
        for (var i = 0; i < message.length; i++) {
    			var curr = message[i];
    			switch (curr.type) {
    			  case 'text': text += curr.data.text; break;

    			  case 'image':
                if (curr.data.url) {
                    images.push(curr.data.url);
                } else if (curr.data.file) {
                    images.push(curr.data.file);
                }
                break;

    			  case 'at':
                if (curr.data.qq==="all") {
                  text += '@全体成员'
                } else {
                  at.push(curr.data.qq)
                  text += `@${curr.data.qq}`;
                }
                break;

    			  case 'face': text += `[${faces[curr.data.id]}]`; break;

            case 'emoji':
                if (curr.data.id) {
                    text = String.fromCodePoint(curr.data.id);
                } else {
                    text = '[绘文字]';
                }
                break;

            case 'bface':
                // TODO 取得表情內容
                text = '[原创表情]';
                break;

            case 'sface':
                // TODO 取得表情內容
                text = '[小表情]';
                break;

    			  case 'music': switch (curr.data.type) {
      				case 'qq': text = `[分享音乐：https://y.qq.com/n/yqq/song/${curr.data.id}_num.html]`; break;
      				case '163': text = `[分享音乐：https://music.163.com/#/song?id=${curr.data.id}]`; break;
      				case 'xiami': text = `[分享音乐：https://www.xiami.com/song/${curr.data.id}]`; break;
      				case 'custom': text = `[分享音乐：${curr.data.url}]`; break;
      				default: text = `[分享音乐]`; break;
    			    };
              break;

    			  case 'share': text = `[分享链接：${curr.data.url}]`; break;

    			  case 'rich':
              /*if (curr.data.content&&curr.data.content!=undefined) {
                var det = JSON.parse(curr.data.content)
                if (det.detail_1&&det.detail_1!=undefined) {
                  DisMsg.embed = {
                    color: 0x99FF00,
          				  author: {
                      name: det.detail_1.title,
                      icon: `https://${det.detail_1.icon}`
                    },
                    title: det.detail_1.desc,
            				thumbnail: { url: `https://${det.detail_1.preview}` },
                    footer: { text: curr.data.title },
                    url: `https://${det.detail_1.url}`
                  }
                } else if (det.music&&det.music!=undefined) {
                  DisMsg.embed = {
          				  color: 0xFF9900,
                    author: {
                      name: det.music.desc,
                      icon: det.music.source_icon
                    },
                    title: det.music.title,
            				thumbnail: { url: det.music.preview },
                    footer: { text: det.music.tag },
                    url: det.music.musicUrl
          				}
                } else if (det.news&&det.news!=undefined) {
                  DisMsg.embed = {
          				  color: 0xFF9900,
                    author: {
                      name: det.news.tag
                    },
                    title: det.news.title,
                    description: det.news.desc,
            				thumbnail: { url: det.news.preview },
                    footer: { text: curr.data.title },
                    url: det.news.jumpUrl
          				}
                } else console.log(curr.data)
              } else if (curr.data.title!=undefined) {
                DisMsg.embed = {
                  footer: { text: curr.data.title },
                  description: curr.data.content
                }
              } else if (curr.data.text!=undefined) {
                var context = curr.data.text.split(" ")
                DisMsg.embed = {
                  title: context.shift(),
                  footer: { text: context.pop() },
                  description: context.join(" ")
                }
              };*/
              text = '[富文本]';
              break;

    			  case 'record':
              records.push(curr.data.file);
              '[语音]';
              break;

    			  default:
              text += JSON.stringify(curr) + ' ';
              break;
    			}
  		  }
      }

    // at 去重
    let ats = [...new Set(at)];

    text = text.replace(/&#91;/gu, '[').replace(/&#93;/gu, ']').replace(/&#44;/gu, ',').replace(/&amp;/gu, '&');

    return {
        text: text,
        extra: {
            images: images,
            records: records,
            ats: ats,
            coords: coords,
        },
        raw: message,
    };
};

const escape = (text) => text.replace(/&/gu, '&amp;').replace(/\[/gu, '&#91;').replace(/\]/gu, '&#93;');

module.exports = {
    faces,
    parseMessage,
    escape,
};