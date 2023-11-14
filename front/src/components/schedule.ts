export interface Schedule {
    title: string
    location: string
    locationLink: string
    time: string
    color: string
    comment: string[]
}

const wedding: Schedule[] =   [
  {
    title: '儀式参列者ご来社',
    location: '明治神宮神楽殿控室',
    locationLink: 'https://www.meijijingu.or.jp/access/',
    time: '15時50分迄',
    color: 'blue-lighten-3',
    comment: []
  },
  {
    title: '挙式',
    location: '明治神宮奉賓殿　右殿',
    locationLink: 'https://www.meijijingu.or.jp/access/',
    time: '16時40分',
    color: 'orange-darken-1',
    comment: []
  },
  {
    title: '明治神宮出発',
    location: '',
    locationLink: '',
    time: '17時40分',
    color: 'orange-darken-2',
    comment: ['明治神宮から披露宴会場の明治記念館に移動します','移動は送迎バスをご用意しています', '明治神宮には戻ってこないためお車でご来社される方はご注意ください']
  },
  {
    title: '明治記念館到着',
    location: '明治記念館',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/access/',
    time: '18時00分',
    color: 'orange-darken-4',
    comment: []
  }
]
export const reception: Schedule[] = [
  {
    title: '来賓　ご来館',
    location: '明治記念館来賓控室',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/access/',
    time: '18時20分まで',
    color: 'red-darken-1',
    comment: ['ご来館いただいたあと　庭園にてご歓談の時間がございます']
  },
  {
    title: '披露宴',
    location: '明治記念館 芙蓉の間',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/banquet/fuyou.html',
    time: '18時50分',
    color: 'blue-darken-4',
    comment: []
  },
  {
    title: 'お開き',
    location: '',
    locationLink: '',
    time: '21時20分',
    color: 'indigo-darken-4',
    comment: []
  }
]

export const koheiSchedule: Schedule[] = [
  {
    title: 'こうへいご来社',
    location: '明治神宮神楽殿控室',
    locationLink: 'https://www.meijijingu.or.jp/access/',
    time: '15時30分迄',
    color: 'blue-lighten-3',
    comment: []
  },
  {
    title: '挙式',
    location: '明治神宮奉賓殿　右殿',
    locationLink: 'https://www.meijijingu.or.jp/access/',
    time: '16時40分',
    color: 'orange-darken-1',
    comment: []
  },
  {
    title: '明治神宮出発',
    location: '',
    locationLink: '',
    time: '17時40分',
    color: 'orange-darken-2',
    comment: ['明治神宮から披露宴会場の明治記念館に移動します','移動は送迎バスをご用意しています', '明治神宮には戻ってこないためお車でご来社される方はご注意ください']
  },
  {
    title: '明治記念館到着',
    location: '明治記念館',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/access/',
    time: '18時00分',
    color: 'orange-darken-4',
    comment: []
  },
  {
    title: '来賓　ご来館',
    location: '明治記念館来賓控室',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/access/',
    time: '18時20分まで',
    color: 'red-darken-1',
    comment: ['ご来館いただいたあと　庭園にてご歓談の時間がございます']
  },
  {
    title: '披露宴',
    location: '明治記念館 芙蓉の間',
    locationLink: 'https://www.meijikinenkan.gr.jp/wedding/banquet/fuyou.html',
    time: '18時50分',
    color: 'blue-darken-4',
    comment: []
  },
  {
    title: 'お開き',
    location: '',
    locationLink: '',
    time: '21時20分',
    color: 'indigo-darken-4',
    comment: []
  }
]

export const scheduleAll = [...wedding, ...reception]