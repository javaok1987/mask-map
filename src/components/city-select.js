import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const CITY_AREA = [
  {
    id: '0',
    name: '台北市',
    districts: [
      { id: 1, zipCode: '100', name: '中正區' },
      { id: 2, zipCode: '103', name: '大同區' },
      { id: 3, zipCode: '104', name: '中山區' },
      { id: 4, zipCode: '105', name: '松山區' },
      { id: 5, zipCode: '106', name: '大安區' },
      { id: 6, zipCode: '108', name: '萬華區' },
      { id: 7, zipCode: '110', name: '信義區' },
      { id: 8, zipCode: '111', name: '士林區' },
      { id: 9, zipCode: '112', name: '北投區' },
      { id: 10, zipCode: '114', name: '內湖區' },
      { id: 11, zipCode: '115', name: '南港區' },
      { id: 12, zipCode: '116', name: '文山區' }
    ]
  },
  {
    id: '1',
    name: '新北市',
    districts: [
      { id: 13, zipCode: '207', name: '萬里區' },
      { id: 14, zipCode: '208', name: '金山區' },
      { id: 15, zipCode: '220', name: '板橋區' },
      { id: 16, zipCode: '221', name: '汐止區' },
      { id: 17, zipCode: '222', name: '深坑區' },
      { id: 18, zipCode: '223', name: '石碇區' },
      { id: 19, zipCode: '224', name: '瑞芳區' },
      { id: 20, zipCode: '226', name: '平溪區' },
      { id: 21, zipCode: '227', name: '雙溪區' },
      { id: 22, zipCode: '228', name: '貢寮區' },
      { id: 23, zipCode: '231', name: '新店區' },
      { id: 24, zipCode: '232', name: '坪林區' },
      { id: 25, zipCode: '233', name: '烏來區' },
      { id: 26, zipCode: '234', name: '永和區' },
      { id: 27, zipCode: '235', name: '中和區' },
      { id: 28, zipCode: '236', name: '土城區' },
      { id: 29, zipCode: '237', name: '三峽區' },
      { id: 30, zipCode: '238', name: '樹林區' },
      { id: 31, zipCode: '239', name: '鶯歌區' },
      { id: 32, zipCode: '241', name: '三重區' },
      { id: 33, zipCode: '242', name: '新莊區' },
      { id: 34, zipCode: '243', name: '泰山區' },
      { id: 35, zipCode: '244', name: '林口區' },
      { id: 36, zipCode: '247', name: '蘆洲區' },
      { id: 37, zipCode: '248', name: '五股區' },
      { id: 38, zipCode: '249', name: '八里區' },
      { id: 39, zipCode: '251', name: '淡水區' },
      { id: 40, zipCode: '252', name: '三芝區' },
      { id: 41, zipCode: '253', name: '石門區' }
    ]
  },
  {
    id: '2',
    name: '基隆市',
    districts: [
      { id: 42, zipCode: '200', name: '仁愛區' },
      { id: 43, zipCode: '201', name: '信義區' },
      { id: 44, zipCode: '202', name: '中正區' },
      { id: 45, zipCode: '203', name: '中山區' },
      { id: 46, zipCode: '204', name: '安樂區' },
      { id: 47, zipCode: '205', name: '暖暖區' },
      { id: 48, zipCode: '206', name: '七堵區' }
    ]
  },
  {
    id: '3',
    name: '連江縣',
    districts: [
      { id: 49, zipCode: '209', name: '南竿鄉' },
      { id: 50, zipCode: '210', name: '北竿鄉' },
      { id: 51, zipCode: '211', name: '莒光鄉' },
      { id: 52, zipCode: '212', name: '東引鄉' }
    ]
  },
  {
    id: '4',
    name: '宜蘭縣',
    districts: [
      { id: 53, zipCode: '260', name: '宜蘭市' },
      { id: 54, zipCode: '261', name: '頭城鎮' },
      { id: 55, zipCode: '262', name: '礁溪鄉' },
      { id: 56, zipCode: '263', name: '壯圍鄉' },
      { id: 57, zipCode: '264', name: '員山鄉' },
      { id: 58, zipCode: '265', name: '羅東鎮' },
      { id: 59, zipCode: '266', name: '三星鄉' },
      { id: 60, zipCode: '267', name: '大同鄉' },
      { id: 61, zipCode: '268', name: '五結鄉' },
      { id: 62, zipCode: '269', name: '冬山鄉' },
      { id: 63, zipCode: '270', name: '蘇澳鎮' },
      { id: 64, zipCode: '272', name: '南澳鄉' },
      { id: 376, zipCode: '290', name: '釣魚台' }
    ]
  },
  {
    id: '6',
    name: '新竹市',
    districts: [
      { id: 66, zipCode: '300', name: '新竹市' },
      { id: 67, zipCode: '300', name: '東區' },
      { id: 68, zipCode: '300', name: '北區' },
      { id: 69, zipCode: '300', name: '香山區' }
    ]
  },
  {
    id: '7',
    name: '新竹縣',
    districts: [
      { id: 70, zipCode: '302', name: '竹北市' },
      { id: 71, zipCode: '303', name: '湖口鄉' },
      { id: 72, zipCode: '304', name: '新豐鄉' },
      { id: 73, zipCode: '305', name: '新埔鎮' },
      { id: 74, zipCode: '306', name: '關西鎮' },
      { id: 75, zipCode: '307', name: '芎林鄉' },
      { id: 76, zipCode: '308', name: '寶山鄉' },
      { id: 77, zipCode: '310', name: '竹東鎮' },
      { id: 78, zipCode: '311', name: '五峰鄉' },
      { id: 79, zipCode: '312', name: '橫山鄉' },
      { id: 80, zipCode: '313', name: '尖石鄉' },
      { id: 81, zipCode: '314', name: '北埔鄉' },
      { id: 82, zipCode: '315', name: '峨眉鄉' }
    ]
  },
  {
    id: '8',
    name: '桃園市',
    districts: [
      { id: 83, zipCode: '320', name: '中壢區' },
      { id: 84, zipCode: '324', name: '平鎮區' },
      { id: 85, zipCode: '325', name: '龍潭區' },
      { id: 86, zipCode: '326', name: '楊梅區' },
      { id: 87, zipCode: '327', name: '新屋區' },
      { id: 88, zipCode: '328', name: '觀音區' },
      { id: 89, zipCode: '330', name: '桃園區' },
      { id: 90, zipCode: '333', name: '龜山區' },
      { id: 91, zipCode: '334', name: '八德區' },
      { id: 92, zipCode: '335', name: '大溪區' },
      { id: 93, zipCode: '336', name: '復興區' },
      { id: 94, zipCode: '337', name: '大園區' },
      { id: 95, zipCode: '338', name: '蘆竹區' }
    ]
  },
  {
    id: '9',
    name: '苗栗縣',
    districts: [
      { id: 96, zipCode: '350', name: '竹南鎮' },
      { id: 97, zipCode: '351', name: '頭份市' },
      { id: 98, zipCode: '352', name: '三灣鄉' },
      { id: 99, zipCode: '353', name: '南庄鄉' },
      { id: 100, zipCode: '354', name: '獅潭鄉' },
      { id: 101, zipCode: '356', name: '後龍鎮' },
      { id: 102, zipCode: '357', name: '通霄鎮' },
      { id: 103, zipCode: '358', name: '苑裡鎮' },
      { id: 104, zipCode: '360', name: '苗栗市' },
      { id: 105, zipCode: '361', name: '造橋鄉' },
      { id: 106, zipCode: '362', name: '頭屋鄉' },
      { id: 107, zipCode: '363', name: '公館鄉' },
      { id: 108, zipCode: '364', name: '大湖鄉' },
      { id: 109, zipCode: '365', name: '泰安鄉' },
      { id: 110, zipCode: '366', name: '銅鑼鄉' },
      { id: 111, zipCode: '367', name: '三義鄉' },
      { id: 112, zipCode: '368', name: '西湖鄉' },
      { id: 113, zipCode: '369', name: '卓蘭鎮' }
    ]
  },
  {
    id: '10',
    name: '台中市',
    districts: [
      { id: 114, zipCode: '400', name: '中區' },
      { id: 115, zipCode: '401', name: '東區' },
      { id: 116, zipCode: '402', name: '南區' },
      { id: 117, zipCode: '403', name: '西區' },
      { id: 118, zipCode: '404', name: '北區' },
      { id: 119, zipCode: '406', name: '北屯區' },
      { id: 120, zipCode: '407', name: '西屯區' },
      { id: 121, zipCode: '408', name: '南屯區' },
      { id: 122, zipCode: '411', name: '太平區' },
      { id: 123, zipCode: '412', name: '大里區' },
      { id: 124, zipCode: '413', name: '霧峰區' },
      { id: 125, zipCode: '414', name: '烏日區' },
      { id: 126, zipCode: '420', name: '豐原區' },
      { id: 127, zipCode: '421', name: '后里區' },
      { id: 128, zipCode: '422', name: '石岡區' },
      { id: 129, zipCode: '423', name: '東勢區' },
      { id: 130, zipCode: '424', name: '和平區' },
      { id: 131, zipCode: '426', name: '新社區' },
      { id: 132, zipCode: '427', name: '潭子區' },
      { id: 133, zipCode: '428', name: '大雅區' },
      { id: 134, zipCode: '429', name: '神岡區' },
      { id: 135, zipCode: '432', name: '大肚區' },
      { id: 136, zipCode: '433', name: '沙鹿區' },
      { id: 137, zipCode: '434', name: '龍井區' },
      { id: 138, zipCode: '435', name: '梧棲區' },
      { id: 139, zipCode: '436', name: '清水區' },
      { id: 140, zipCode: '437', name: '大甲區' },
      { id: 141, zipCode: '438', name: '外埔區' },
      { id: 142, zipCode: '439', name: '大安區' }
    ]
  },
  {
    id: '12',
    name: '彰化縣',
    districts: [
      { id: 143, zipCode: '500', name: '彰化市' },
      { id: 144, zipCode: '502', name: '芬園鄉' },
      { id: 145, zipCode: '503', name: '花壇鄉' },
      { id: 146, zipCode: '504', name: '秀水鄉' },
      { id: 147, zipCode: '505', name: '鹿港鎮' },
      { id: 148, zipCode: '506', name: '福興鄉' },
      { id: 149, zipCode: '507', name: '線西鄉' },
      { id: 150, zipCode: '508', name: '和美鎮' },
      { id: 151, zipCode: '509', name: '伸港鄉' },
      { id: 152, zipCode: '510', name: '員林市' },
      { id: 153, zipCode: '511', name: '社頭鄉' },
      { id: 154, zipCode: '512', name: '永靖鄉' },
      { id: 155, zipCode: '513', name: '埔心鄉' },
      { id: 156, zipCode: '514', name: '溪湖鎮' },
      { id: 157, zipCode: '515', name: '大村鄉' },
      { id: 158, zipCode: '516', name: '埔鹽鄉' },
      { id: 159, zipCode: '520', name: '田中鎮' },
      { id: 160, zipCode: '521', name: '北斗鎮' },
      { id: 161, zipCode: '522', name: '田尾鄉' },
      { id: 162, zipCode: '523', name: '埤頭鄉' },
      { id: 163, zipCode: '524', name: '溪州鄉' },
      { id: 164, zipCode: '525', name: '竹塘鄉' },
      { id: 165, zipCode: '526', name: '二林鎮' },
      { id: 166, zipCode: '527', name: '大城鄉' },
      { id: 167, zipCode: '528', name: '芳苑鄉' },
      { id: 168, zipCode: '530', name: '二水鄉' }
    ]
  },
  {
    id: '13',
    name: '南投縣',
    districts: [
      { id: 169, zipCode: '540', name: '南投市' },
      { id: 170, zipCode: '541', name: '中寮鄉' },
      { id: 171, zipCode: '542', name: '草屯鎮' },
      { id: 172, zipCode: '544', name: '國姓鄉' },
      { id: 173, zipCode: '545', name: '埔里鎮' },
      { id: 174, zipCode: '546', name: '仁愛鄉' },
      { id: 175, zipCode: '551', name: '名間鄉' },
      { id: 176, zipCode: '552', name: '集集鎮' },
      { id: 177, zipCode: '553', name: '水里鄉' },
      { id: 178, zipCode: '555', name: '魚池鄉' },
      { id: 179, zipCode: '556', name: '信義鄉' },
      { id: 180, zipCode: '557', name: '竹山鎮' },
      { id: 181, zipCode: '558', name: '鹿谷鄉' }
    ]
  },
  {
    id: '14',
    name: '嘉義市',
    districts: [
      { id: 182, zipCode: '600', name: '嘉義市' },
      { id: 183, zipCode: '600', name: '東區' },
      { id: 184, zipCode: '600', name: '西區' }
    ]
  },
  {
    id: '15',
    name: '嘉義縣',
    districts: [
      { id: 185, zipCode: '602', name: '番路鄉' },
      { id: 186, zipCode: '603', name: '梅山鄉' },
      { id: 187, zipCode: '604', name: '竹崎鄉' },
      { id: 188, zipCode: '605', name: '阿里山' },
      { id: 189, zipCode: '606', name: '中埔鄉' },
      { id: 190, zipCode: '607', name: '大埔鄉' },
      { id: 191, zipCode: '608', name: '水上鄉' },
      { id: 192, zipCode: '611', name: '鹿草鄉' },
      { id: 193, zipCode: '612', name: '太保市' },
      { id: 194, zipCode: '613', name: '朴子市' },
      { id: 195, zipCode: '614', name: '東石鄉' },
      { id: 196, zipCode: '615', name: '六腳鄉' },
      { id: 197, zipCode: '616', name: '新港鄉' },
      { id: 198, zipCode: '621', name: '民雄鄉' },
      { id: 199, zipCode: '622', name: '大林鎮' },
      { id: 200, zipCode: '623', name: '溪口鄉' },
      { id: 201, zipCode: '624', name: '義竹鄉' },
      { id: 202, zipCode: '625', name: '布袋鎮' }
    ]
  },
  {
    id: '16',
    name: '雲林縣',
    districts: [
      { id: 203, zipCode: '630', name: '斗南鎮' },
      { id: 204, zipCode: '631', name: '大埤鄉' },
      { id: 205, zipCode: '632', name: '虎尾鎮' },
      { id: 206, zipCode: '633', name: '土庫鎮' },
      { id: 207, zipCode: '634', name: '褒忠鄉' },
      { id: 208, zipCode: '635', name: '東勢鄉' },
      { id: 209, zipCode: '636', name: '台西鄉' },
      { id: 210, zipCode: '637', name: '崙背鄉' },
      { id: 211, zipCode: '638', name: '麥寮鄉' },
      { id: 212, zipCode: '640', name: '斗六市' },
      { id: 213, zipCode: '643', name: '林內鄉' },
      { id: 214, zipCode: '646', name: '古坑鄉' },
      { id: 215, zipCode: '647', name: '莿桐鄉' },
      { id: 216, zipCode: '648', name: '西螺鎮' },
      { id: 217, zipCode: '649', name: '二崙鄉' },
      { id: 218, zipCode: '651', name: '北港鎮' },
      { id: 219, zipCode: '652', name: '水林鄉' },
      { id: 220, zipCode: '653', name: '口湖鄉' },
      { id: 221, zipCode: '654', name: '四湖鄉' },
      { id: 222, zipCode: '655', name: '元長鄉' }
    ]
  },
  {
    id: '17',
    name: '台南市',
    districts: [
      { id: 224, zipCode: '700', name: '中西區' },
      { id: 225, zipCode: '701', name: '東區' },
      { id: 226, zipCode: '702', name: '南區' },
      { id: 228, zipCode: '704', name: '北區' },
      { id: 229, zipCode: '708', name: '安平區' },
      { id: 230, zipCode: '709', name: '安南區' },
      { id: 231, zipCode: '710', name: '永康區' },
      { id: 232, zipCode: '711', name: '歸仁區' },
      { id: 233, zipCode: '712', name: '新化區' },
      { id: 234, zipCode: '713', name: '左鎮區' },
      { id: 235, zipCode: '714', name: '玉井區' },
      { id: 236, zipCode: '715', name: '楠西區' },
      { id: 237, zipCode: '716', name: '南化區' },
      { id: 238, zipCode: '717', name: '仁德區' },
      { id: 239, zipCode: '718', name: '關廟區' },
      { id: 240, zipCode: '719', name: '龍崎區' },
      { id: 241, zipCode: '720', name: '官田區' },
      { id: 242, zipCode: '721', name: '麻豆區' },
      { id: 243, zipCode: '722', name: '佳里區' },
      { id: 244, zipCode: '723', name: '西港區' },
      { id: 245, zipCode: '724', name: '七股區' },
      { id: 246, zipCode: '725', name: '將軍區' },
      { id: 247, zipCode: '726', name: '學甲區' },
      { id: 248, zipCode: '727', name: '北門區' },
      { id: 249, zipCode: '730', name: '新營區' },
      { id: 250, zipCode: '731', name: '後壁區' },
      { id: 251, zipCode: '732', name: '白河區' },
      { id: 252, zipCode: '733', name: '東山區' },
      { id: 253, zipCode: '734', name: '六甲區' },
      { id: 254, zipCode: '735', name: '下營區' },
      { id: 255, zipCode: '736', name: '柳營區' },
      { id: 256, zipCode: '737', name: '鹽水區' },
      { id: 257, zipCode: '741', name: '善化區' },
      { id: 258, zipCode: '742', name: '大內區' },
      { id: 259, zipCode: '743', name: '山上區' },
      { id: 260, zipCode: '744', name: '新市區' },
      { id: 261, zipCode: '745', name: '安定區' }
    ]
  },
  {
    id: '19',
    name: '高雄市',
    districts: [
      { id: 262, zipCode: '800', name: '新興區' },
      { id: 263, zipCode: '801', name: '前金區' },
      { id: 264, zipCode: '802', name: '苓雅區' },
      { id: 265, zipCode: '803', name: '鹽埕區' },
      { id: 266, zipCode: '804', name: '鼓山區' },
      { id: 267, zipCode: '805', name: '旗津區' },
      { id: 268, zipCode: '806', name: '前鎮區' },
      { id: 269, zipCode: '807', name: '三民區' },
      { id: 270, zipCode: '811', name: '楠梓區' },
      { id: 271, zipCode: '812', name: '小港區' },
      { id: 272, zipCode: '813', name: '左營區' },
      { id: 275, zipCode: '814', name: '仁武區' },
      { id: 276, zipCode: '815', name: '大社區' },
      { id: 277, zipCode: '820', name: '岡山區' },
      { id: 278, zipCode: '821', name: '路竹區' },
      { id: 279, zipCode: '822', name: '阿蓮區' },
      { id: 280, zipCode: '823', name: '田寮區' },
      { id: 281, zipCode: '824', name: '燕巢區' },
      { id: 282, zipCode: '825', name: '橋頭區' },
      { id: 283, zipCode: '826', name: '梓官區' },
      { id: 284, zipCode: '827', name: '彌陀區' },
      { id: 285, zipCode: '828', name: '永安區' },
      { id: 286, zipCode: '829', name: '湖內區' },
      { id: 287, zipCode: '830', name: '鳳山區' },
      { id: 288, zipCode: '831', name: '大寮區' },
      { id: 289, zipCode: '832', name: '林園區' },
      { id: 290, zipCode: '833', name: '鳥松區' },
      { id: 291, zipCode: '840', name: '大樹區' },
      { id: 292, zipCode: '842', name: '旗山區' },
      { id: 293, zipCode: '843', name: '美濃區' },
      { id: 294, zipCode: '844', name: '六龜區' },
      { id: 295, zipCode: '845', name: '內門區' },
      { id: 296, zipCode: '846', name: '杉林區' },
      { id: 297, zipCode: '847', name: '甲仙區' },
      { id: 298, zipCode: '848', name: '桃源區' },
      { id: 299, zipCode: '849', name: '那瑪夏區' },
      { id: 300, zipCode: '851', name: '茂林區' },
      { id: 301, zipCode: '852', name: '茄萣區' }
    ]
  },
  {
    id: '22',
    name: '澎湖縣',
    districts: [
      { id: 302, zipCode: '880', name: '馬公市' },
      { id: 303, zipCode: '881', name: '西嶼鄉' },
      { id: 304, zipCode: '882', name: '望安鄉' },
      { id: 305, zipCode: '883', name: '七美鄉' },
      { id: 306, zipCode: '884', name: '白沙鄉' },
      { id: 307, zipCode: '885', name: '湖西鄉' }
    ]
  },
  {
    id: '23',
    name: '金門縣',
    districts: [
      { id: 308, zipCode: '890', name: '金沙鎮' },
      { id: 309, zipCode: '891', name: '金湖鎮' },
      { id: 310, zipCode: '892', name: '金寧鄉' },
      { id: 311, zipCode: '893', name: '金城鎮' },
      { id: 312, zipCode: '894', name: '烈嶼鄉' },
      { id: 313, zipCode: '896', name: '烏坵鄉' }
    ]
  },
  {
    id: '24',
    name: '屏東縣',
    districts: [
      { id: 314, zipCode: '900', name: '屏東市' },
      { id: 315, zipCode: '901', name: '三地門' },
      { id: 316, zipCode: '902', name: '霧台鄉' },
      { id: 317, zipCode: '903', name: '瑪家鄉' },
      { id: 318, zipCode: '904', name: '九如鄉' },
      { id: 319, zipCode: '905', name: '里港鄉' },
      { id: 320, zipCode: '906', name: '高樹鄉' },
      { id: 321, zipCode: '907', name: '鹽埔鄉' },
      { id: 322, zipCode: '908', name: '長治鄉' },
      { id: 323, zipCode: '909', name: '麟洛鄉' },
      { id: 324, zipCode: '911', name: '竹田鄉' },
      { id: 325, zipCode: '912', name: '內埔鄉' },
      { id: 326, zipCode: '913', name: '萬丹鄉' },
      { id: 327, zipCode: '920', name: '潮州鎮' },
      { id: 328, zipCode: '921', name: '泰武鄉' },
      { id: 329, zipCode: '922', name: '來義鄉' },
      { id: 330, zipCode: '923', name: '萬巒鄉' },
      { id: 331, zipCode: '924', name: '崁頂鄉' },
      { id: 332, zipCode: '925', name: '新埤鄉' },
      { id: 333, zipCode: '926', name: '南州鄉' },
      { id: 334, zipCode: '927', name: '林邊鄉' },
      { id: 335, zipCode: '928', name: '東港鎮' },
      { id: 336, zipCode: '929', name: '琉球鄉' },
      { id: 337, zipCode: '931', name: '佳冬鄉' },
      { id: 338, zipCode: '932', name: '新園鄉' },
      { id: 339, zipCode: '940', name: '枋寮鄉' },
      { id: 340, zipCode: '941', name: '枋山鄉' },
      { id: 341, zipCode: '942', name: '春日鄉' },
      { id: 342, zipCode: '943', name: '獅子鄉' },
      { id: 343, zipCode: '944', name: '車城鄉' },
      { id: 344, zipCode: '945', name: '牡丹鄉' },
      { id: 345, zipCode: '946', name: '恆春鎮' },
      { id: 346, zipCode: '947', name: '滿州鄉' }
    ]
  },
  {
    id: '25',
    name: '台東縣',
    districts: [
      { id: 347, zipCode: '950', name: '台東市' },
      { id: 348, zipCode: '951', name: '綠島鄉' },
      { id: 349, zipCode: '952', name: '蘭嶼鄉' },
      { id: 350, zipCode: '953', name: '延平鄉' },
      { id: 351, zipCode: '954', name: '卑南鄉' },
      { id: 352, zipCode: '955', name: '鹿野鄉' },
      { id: 353, zipCode: '956', name: '關山鎮' },
      { id: 354, zipCode: '957', name: '海端鄉' },
      { id: 355, zipCode: '958', name: '池上鄉' },
      { id: 356, zipCode: '959', name: '東河鄉' },
      { id: 357, zipCode: '961', name: '成功鎮' },
      { id: 358, zipCode: '962', name: '長濱鄉' },
      { id: 359, zipCode: '963', name: '太麻里鄉' },
      { id: 360, zipCode: '964', name: '金峰鄉' },
      { id: 361, zipCode: '965', name: '大武鄉' },
      { id: 362, zipCode: '966', name: '達仁鄉' }
    ]
  },
  {
    id: '26',
    name: '花蓮縣',
    districts: [
      { id: 363, zipCode: '970', name: '花蓮市' },
      { id: 364, zipCode: '971', name: '新城鄉' },
      { id: 365, zipCode: '972', name: '秀林鄉' },
      { id: 366, zipCode: '973', name: '吉安鄉' },
      { id: 367, zipCode: '974', name: '壽豐鄉' },
      { id: 368, zipCode: '975', name: '鳳林鎮' },
      { id: 369, zipCode: '976', name: '光復鄉' },
      { id: 370, zipCode: '977', name: '豐濱鄉' },
      { id: 371, zipCode: '978', name: '瑞穗鄉' },
      { id: 372, zipCode: '979', name: '萬榮鄉' },
      { id: 373, zipCode: '981', name: '玉里鎮' },
      { id: 374, zipCode: '982', name: '卓溪鄉' },
      { id: 375, zipCode: '983', name: '富里鄉' }
    ]
  }
];

export default class SelectCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityOptions: CITY_AREA.map(item => ({
        key: item.id,
        text: item.name,
        value: item.name
      })),
      districtOptions: [{"key":1,"text":"中正區","value":"中正區"},{"key":2,"text":"大同區","value":"大同區"},{"key":3,"text":"中山區","value":"中山區"},{"key":4,"text":"松山區","value":"松山區"},{"key":5,"text":"大安區","value":"大安區"},{"key":6,"text":"萬華區","value":"萬華區"},{"key":7,"text":"信義區","value":"信義區"},{"key":8,"text":"士林區","value":"士林區"},{"key":9,"text":"北投區","value":"北投區"},{"key":10,"text":"內湖區","value":"內湖區"},{"key":11,"text":"南港區","value":"南港區"},{"key":12,"text":"文山區","value":"文山區"}],
      city: '台北市',
      district: '大安區'
    };
  }

  handleCity = (e, { value }) => {
    this.props.onSelectCity(value);

    const currentCity = CITY_AREA.find(function(item, index, array) {
      return item.name === value;
    });
    this.setState({
      city: value,
      districtOptions: currentCity.districts.map(item => ({
        key: item.id,
        text: item.name,
        value: item.name
      }))
    });
    console.log(JSON.stringify(this.state.districtOptions))
    if (currentCity.districts && currentCity.districts.length > 1) {
      const _district = currentCity.districts[0].name;
      this.setState({
        district: _district
      });
      this.props.onSelectDistrict(_district);
    }
  };

  handleDistrict = (e, { value }) => {
    console.log('District', value);
    this.setState({
      district: value
    });
    this.props.onSelectDistrict(value);
  };

  render() {
    const { cityOptions, districtOptions, city, district } = this.state;
    return (
      <div>
        <Dropdown
          button
          className="icon teal"
          floating
          labeled
          icon="map marker alternate"
          options={cityOptions}
          onChange={this.handleCity}
          search
          text={city}
        />
        <Dropdown
          button
          className="icon teal"
          floating
          labeled
          icon="map marker alternate"
          options={districtOptions}
          onChange={this.handleDistrict}
          search
          text={district}
        />
      </div>
    );
  }
}
