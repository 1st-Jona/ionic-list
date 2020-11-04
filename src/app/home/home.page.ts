import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contacts = [];

  constructor() {
    this.contacts.push({
      image: 'https://i.pinimg.com/originals/fd/83/9a/fd839ac0717dfaa96a2f9e8fb3792f41.jpg',
      name: 'Daniel Larusso',
      status: 'Entrenando',
      message: '¡Arriba Miyagi do Karate!'
    });
    this.contacts.push({
      image: 'data:image/jpeg;base64,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',
      name: 'Samantha Larusso',
      status: 'En clase',
      message: '¡Miyagi do Karate les enseñará la lección!'
    });
    this.contacts.push({
      image: 'https://image.tmdb.org/t/p/w235_and_h235_face/AoTxNif6Kv5KtIk3YdfQUxLrLeR.jpg',
      name: 'Johny Lawrence',
      status: 'Durmiendo',
      message: '¡Golpea primero, golpea duro, sin piedad!'
    });  
    this.contacts.push({
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFhUWFxUVFRUVFxUWFRUVFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy0lHSUtLS0tLy0tLS0vLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS01LS0tNv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABCEAACAQIDBQUFBQYEBgMAAAABAgADEQQhMQUSQVFhBiJxgZETMqGx0QdCweHwFFJicoKSIzOy8SRDY6KzwhUlNP/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAnEQEBAAIBBAEEAgMBAAAAAAAAAQIRAwQSITEyEyJBUTNhcYGxI//aAAwDAQACEQMRAD8A9gSGsBIawBzCEEwhAFFGivAKO3drU8LQevU0QXtxYnJR5kifPm3tv4nGVGqV6pufdQHuIOCquluus6L7We0zV8R+y0W/w6J75Byapy5d3MeJM87qtu5DM8TEcSOhvmb9YJoBcyfL6QKZIte+fwEtobjn8oyV1NMn3rEc8vnLFOkP1xkNWip4D4yEOU57vEG9vK8A0lXd8Pl+UDE1Ld7how59fSQ0sWGH6y8YFRuHA/Ajh4RU46PY21KlIjcc2BVlzORWw+gnrezO14q5qA2llG9vEgDeIyzzJy6dZ4Ps2vZCeRA8rTRwWLddGII0IPz5yO0tbfR2Ax1Osu8h6EHIg8QRwMsTyjsP2wUVitU29pugtc2LDu3N9Li3S4nqwMnKgNtIlibSJIAljPrENYzwA4QgwhAGMSxiY4gDxjHgkxAMUUUAjSGsBISRgRhCAYQgDzlftB7QnCUN2mbVat1U/uqPffxzAHU9J09RrC88H7cdokxeJeqDejTAppfRt05kW4E3PhaKnHHsWux5sSSeukisgPM/DygV8QHOWmuWUiG9rb9eMJBakxSNYlONvK0qsai6n0kv7WVGQv1Okz69ZmNyYyWWx3Pe9YKY03424i95WFO8npUL6enGAThhe/HjbRhzkxa48P0DK27a3PSGv6+UjUosYZrA+N/lJalUizA5cfzkeHwrkaHOatPZhCi4NrSNyiUwtiCnXBz4/rhPaPs67UmtSFKqbvTsL8SnAkdNLzw/FIBlnl6+Rmn2V21Uw9UMp6G/EZGxHkJKI19Mk5RJMzYG0Ur0FqIbgjLpnmPLSaaSSJDWNU4RDWKqdIAccRhEIAJ4wlgX1hLAHMYx4zQAbx4MeAAkJYKQkjIjDgGGTlEHG/aZtunSwrUvaqr1CqsA3fFPVzYZi4G7/VPC6lmS7DuA5DmfpO6+2bYw9qMXTsUa1Opu3v7QDU8NBbynntXu01z1z8jEkjzOi/gBJCoA7xueXCV1qE+H64wlUnMep0/MxkqYx7/lkJLs7ZNSqe6t5JgsC1WoAM5632V2GtJR3RvHWU8nL2+mjh4O/wA3047AdgarWJHI5/EGa+1exFMbvs1sT10856ZQw4AkjYccpTc8q0Y8WEeP0+wTXzJ+vhNDC9gyDmQf1pPTfZDlDCCQuWf7WzDCfhx2E7NU6Yta/wCMPEbFU0922l7Tp6qiV2WU+drvGnju28DuMQZjUbK3G87ft3T3Te04o89R8RN/FluOXzY9uVex/Y1Vc0q4J7gKEDkxB3rcsgvpPSEnkH2QbZCVGw7MAKmaXH311XzHy6z19DLooNxjVuEfjBrcIySiOIK6QhEAc4SwecJIGKC0KC8ACKKKACsNJGskSMjNDgNDgHg32nYfE0a1Slvk0HqtWRL2sxAv4iz/ABnF1xdQdLWBHHIZHpPZvtk2YzU6OJVb7jGnUI4LUA3GPQMLf1TxbaFNlJY+P0iNXaqo1Fz1iVmqkDhyGkqG51mjsod8RZejx9u47I7LVTvEZz0TCoLCcxsDCkKCfKdVhzOffOTr4zWMi7SYyXOQ03lgZyaFCRGtCyieoBFoIKoldhItpbZoUReo4HzPgJzj7erVz/wwNtN62Xjci0XZvyffJ4am29kpXpMjDUa8Qec8ZxWHeiWQjvKSpH0ntezVrD/Mbe53t8LCcB272fbGZDKoFPn7t/hLeG6umbqMe6bYPZao7V6YUHe3hbdvcNqLDyn0tQvYX1sL+PGeWdiNj4bCV1qmuSyqUqBgN276G9shf8J6pTOU04ZTKbjLyceWF1kXGKrGOsVWTVpFhCCscQATxhJBaEkQFBaEYLQMMUUUAjWSJI1h05IiMORmSRBndoMGa+Hq0h99CPO2Xh4z5w7RUGplkYd5WKnxGs+nyJ419sOxBTqiuulUHeFtGUWJHjcefjFTjyYa248p0nYzBipXG9oBf0nPmnunxnT9iagGIQcDceukhn8as4vnNvUGdUW5yAlGtt9xklK45k5+gBmrWw4YZzF2ntP2R3KaEschYC5PiclA4sZkx06OW6hrdtGpmxw7nwBt8pNhO2qtkabqOt/pObx9HH1KjI612a/dNIotEKRcHeZTveo4zqV7O0wyGne1h7QORmfvbls+esszmor47bfzp0mAxQqgMMxKXaCtUVe5qZf2dhlpZKLCHtSiDYymy6Wy+XlO1dnYht6sylwrKGJ7wXeIzCfetfT4iaPZ729X2m7VZVRQUFSjugtf3QA9zlyOU7unglNyqqCSSSBmSdbmS08CJPu8ekOyb3vTJ2EuIt/igDoGLDy3sx4Gc/8AabS3fYVhlYlSfQj5Gd8KQE5P7TKQODHSolvO4/GLD5Dl84jwKJWtvi+8tmI423WVrc9DPR8KtlA5ACeddiMMyiije8W3ra2UA5mejpL+n9X/ACo633jv9E2sepwjNrFU4TQxJEhCAhhXgAnjDSRkyRYjEYLR4zQAIoooAAh04CwqclSJocjaHAHmP2t2bSxGFqrUUHdRnUkXKsqkhhyM14NRAwKnQgg+ByiDxPHdiVqCr7MWKWKKBYEHOxPgZx+yFahXAbVHBPqL/CexrQq06bowPtQu4ebGmSN4fzLYzge0Ww92itdB37v7VbWO6c79bW+MzY5WW410eXjmUnJj/T0fD2KjqJKmCXWwvztMfsljxWw9N+lj4jI/KdHScSrSze0BwAOpPlaTU8Io4S0pEao4Aj1C3b4VS1jJMTmJXp67x0l5twre8Wtpb1Yz6D2NpfvMapjqPtDTFRd9RfduN4criaFBzaQl0nlN+R1WmH2jwYr00pnT2ik25KGb8BNeqYsJhkqHdcXGuRsQeBBEeMtuohnZjN0+wsKoqAhfdU5/AX9Z0KyPDYZKa2UeJOZPiYaTXxYdmOnP5+T6mWyfWKpGfWJ5apSLpHjLpHERhMkSQtJUgBwXjxmgAxRooAIhU4EKnJImaHI2kkAUcRo4gbM2/hQ1Pesbrnlru8beGvrMI4FKlIBrONRx8LTsSJhbT2U+6xw5CsQSob3AeVhzPWUZ8e/MaeHn7Z2305fZeBXDtUppku/vhR93eAuB0uD6zZoPOI2Th9oUMY1THMg9sqqEVuTd0heFixH9U7BDYynLGz204ZzL00qbw3F5TpVJN7cSG1jJ2vsmpVG6Kzov/TYo39wzg/s9VFVQ7ECwu2bHxPGadfEKo3mYAczMSv2gpE2HlmL+kWS3jmV9RcpYBFN90Ak3JtmSdSTxMvBraTn6u26pzSmxA/hy/uNvhHo4/E1WAFNUUe8Sbk9AJDWk8scp7bm/eWNnW9oovnmR5ZH5/GZ9N5tbLwykByM87HkOMt4JvJj6m6xbHCAhhnSRpNrnE+sZtI76xm0gEi6QhBXSFAIWOcnSVm1lmnACMZojGaABHjRQAWj04LQqUkiFpKZE0kgCjrGMSwpiJgOtxaFFEFA7JoAl/ZqXtbfOb/3HOc1WYK7KD7pt4XzE7KppOM29hUSszpkzAb2epUZG3DI28pXyTcXcGWshiqMoGJTfG6GIvxGsxxj902bL5S/h64Mx5R0sdKOI2QFYF2qVQODm4HpJBtKjTAC0wLDQCbNPOTU8DT13QT4Qly/C2cnbHOrtKpVNgth4TUw67g68TNF6YGgEpYhh6SGco+p3RA9S06XYtYPSUjgSp8VNj8Zxq1N5r8OHhO22YoFJLC2QPmcyfWX9PfNYern2xf4QEh8ICTWwk+sYx31gmASLDgJCgELaydJXbWWEgBGM0cxmgARRooADQ6UBodOSRC0kkbSSAM0dYzR1hTPFFGZgBcmwGZMQUtt4xaVFmblYDiTwnz7sfb1aptFPaVHYGoyd4kjvArlfThPWe0+P9tcD3QCF69Z4f2bwrnHogButW7HkFJOZ8pbycfbxy3+0ePO3Pw9bxWF3pm+zq0j3cxynQKt4NajOTux2tSqmC22NHup6/WX223SGrgeYlF8IDluk30sJb2f2bpX3nUE8BqB9Yt2pbk9kNrh80VnHAqCR/dp8ZGKVerqu4vEN7x6WGQnQ1PZ01ubC0zTi2Nyim3Deyv5ayN9iZb9Q+E2YlrEsD5Wm5sbFoyBAwLJYMvEcsuVuM5Zqr3sSflOS2ltapg9qU3BIWrTUdCykgj/T6zR0txufay9ZLMO57VwgJrKuy9opWQFTnbNeI/KWkmuyy6rny79HfWCxyjuc4xOUDGkOAkOAQtrJ1kJ1kwgDmJoiYmMAjijXjQBm1h09JG2skSSRC0kMjaGYAzQlkNesqi7EAdZjbR7RKotT1/eI+Q+snjhllfBZZSe2zisZTpi7sF8dT4DjOa2ttj2tlS4T4t49JkYiqXJZiWJ4mOJs4+CY+b7Z8uS01TSc9gcGtPEZC28zsepZVAv/AGt6zomlNkX2ikmwJCk8rmwPgD+MfPx/U48sZ7S4OTs5JlWmgkqU94gRjTKkgjMZEdZbo07C/Ezz2vLvd3hZp4dQL/7+sr1sQRkl787ZS3U92DSQcvCFhS/tQTDljvOST14eHAS3ZVXPIQahtw9JjY/Z9es3erMlP91FAY+LEn4CRTvlJia6tYr1F5xf2iUg1Om/3qbhlPhrO7TZ6Kthnlx1nMdotltWYUvu23mPJALsfw8xHxy/UmkeWz6d2u7IxTBVYG2QIIyM6bBdpN0f4oJ/iGvmJxuyz/hqOgl0mejz45l7eemdnp3mG2pRq+44PQ5H0Mtzyq5RrD9DhNjZ3aCsmW9ccmzlOfSX3jVmPP8At6AkkmBgO0tJsnBU89R9Zs0cVTf3XU+efpMuXHlj7i6ZS+jmSrIzJFkEjmJojGaARRRRQIzayRTYXmZtDaiU7gd4/AeJmFidovUvvHLgOHpNGHDlkry5JG7jNr0k47x6fWZWI7Ru2SAKOepmJVrZ2kW9YzVh0+M9qMuXKrlfEs5uxJPWU6hEORVJfMdK7SSpoOtvjLgmWxv06xUHxAaxKsnMizAdLa+klYGi7ASjiBeTsZXqGEgb2zNtYfEoUZrYmjuq6HIuuW64/eBBGY0OUv6zgtk4H/7JKwGXsKgbxDIF+DH0ne0BecDrMZjy2R2ekty45am6SQpGpiSXmeRfboAXOV8UpvkDLhkbtaKzwcyYb+3ckDdpqDx7znyGQ9T4SptqumHwtdzcsyhQx1YsQip0uzCalVwCzaAak/EzzHtP2tXFVKeGoX9n7VS7n724d4BRyuAb9BJ9NL9SWF1OWP07K3sCLKByl4TOwzy/Ta4no7HABXp6Hy/X64yFUIMmq1VGR46DUnwEdRzjhHQy1SrGVwJIgtCzYaFHaFRfddh55ek3Nndor5VR/UPxE5ZYYlOfDjknjnY9EpVlYXUgjpDaef0MS6G6sQehm1hu0jAWqDe6jI/QzJn02U9L8eWX26GKZP8A87T/AHW+H1ilX08v0n34/ty5r7358InbKRVl+8NfmOUem4YXE6umLatiOcOk+8I9dbyhSqlWtzkoGjpI6mcNWuJE5jAKQG8QdbXHLLX8JPIKqmwYag3/ACk97wIxMr1TJzI0pF2t6+EDW9g07OzHlYeudvQTpMOMvGYaUwBYaCW8NjindbMc+I8ZyOt6fPLK8mPl0uk58ccZhfDZtCUyGnVDC4MknObaK8rYgmWJznbHtAmEoNUOZ0Rf3nPujw4noDC7vgpdeXF/alt8qFwlNveG9Wtru/dQ+OZPQDnOA2Mf+Ipfzf8AqZWxOIeq7VKjFnclmY8Sfw4W5WlvYKXxFPxJ/wC0zbwYdtxjFzZ9269LoiW6ZlbDjISyMp2XOMlEgkk3J49OVpMpjLDfhzJ+A/3EAdYaxlWFGBKIQgXhCICg3zHiPr+EK8jJ7w8z+H4xBc9pFK+9HkdHtIZUbuN/C3wbgfPT0ltTIq6Aix45esshE4mVj6dsxwl/CVDmjHvD4jgf11jYqlcGAVsNXusmSZKOUbdmpQe4kiWAJHobef1hb0Cq2V+UDM7TQwtHdHU6ytgqF+8dNR1MvEyGV/AhmkbQiYN4tGnwmIKHpNT9sW15iWgte1gbTD1PR9/3Ye/+tnT9T2fbn6Tbc7S0cOheo9gPUnkBxM8W7UdoauNq77ZItxTT90cSebH8vGbtomKGIP7QLC59la5Qr/CefO+flaYW7MOHFcPl7aOTl7/XohNTswL4lOgY/C34zME2eyC3xI/kb5rNPDPvjPyX7a9GoLlJrQKAkpGc6rEJYmPetyA+Of0ipHOChuSeZPwyHygFhY5ggxzEDmEDBtFAC3pFvd4+A+MImAmp8fkBGEtzFBuYogHB1mHcqZOOI0bqPpLLGBWohhY/mOsheoye9dl/e4jxH4yQBjaZydPeXTqOKmT0qoqIGHHUcQRqDEKgYXBuOYlXDHcqEfdf/V+cCVdqYfiNRI8Bib5TWxFOYGJpGm28NOP1koVa+/LGEQMc9Pn0mPQxN5u4TJQOYufE5xZeIcXiZC5huZFK4kUUaOYwYtFeKhSdmCAXJ4/XlHxNBkYqw0IBIzFzw6ecVyxl1vyerZtVx+BpV0NOqoZDwPDqCMweonlfars+cJUFm3qbX3D94W+63C/XjPV8TWCKWPCcH2q2oFRlazPV+6cwq8Dbpw6ynnwxuO6nx5WXUcSZv9iVvXY8k+Z/KYKmdJ2FUe1qHoo+JmXp5/6Rdy/Gu/orJCI1LSEROkxhY7oJ5A+sVFLACLEHJRzI9BmfkJKogYt2PFFEDRmMe0apGCWR08wc9SfmYRMiRu6MuA+MAkt4xSPebpFANGBU0iihAyNk/wDM/mPzkmP1X+ZfnFFJz2V9NLETH2h7p8DFFFiKycJOsX3x4CKKPL1Ci48A6RRSuJhGkUUUA0uz/wDmn+U/6lmfjP8APr+A/wDPFFMHN/PP9NPH/HWVtv3R/Ms8u7Vf/qfwX5R4pd1PxV8PyZiTpuwfvVP6fxiilHT/AMkW8vxr0CnCMUU6LIir+9T/AK/wllYooA4jxRRAx1gVuEUUAjxHunwjr7o8ooowrxRRQD//2Q==',
      name: 'Miguel Díaz',
      status: 'Entrenando',
      message: '¡Cobra kai es lo máximo!'
    });
    this.contacts.push({
      image: 'https://www.vantunews.com/storage/app/1598975685-Courtney-Henggeler1.jpg',
      name: 'Amanda Larusso',
      status: 'En reunión',
      message: 'Autos Larusso son tu mejor opción.'
    });
    this.contacts.push({
      image: 'https://www.famousbirthdays.com/headshots/tanner-buchanan-6.jpg',
      name: '  Robby Keene',
      status: 'Ocupado',
      message: 'Samantha es una gran peleadora. Arriba Miyagi Do Karate'
    });
    this.contacts.push({
      image: 'https://static.wikia.nocookie.net/thekaratekid/images/a/a5/Eli_Moskowitz.png/revision/latest?cb=20200509084441&path-prefix=es',
      name: 'Eli Moskowitz',
      status: 'Entrenando',
      message: 'Miyagi do apesta, arriba Cobra Kai lml'
    });
    this.contacts.push({
      image: 'https://peru21.pe/resizer/b_eXbyUJfw65v8f4-_yKuTk-_tk=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R6ZEVAEQS5CAVNDUHI7Z7IBCOU.PNG',
      name: 'Tory Nichols',
      status: 'Trabajando',
      message: 'Me la vas a pagar Samantha, ¡arriba Cobra Kai!'
    });
    this.contacts.push({
      image: 'https://image.tmdb.org/t/p/w235_and_h235_face/aqbQh0hMt5vRbdhErs32bybr7Ah.jpg',
      name: 'Demetri',
      status: 'Estudiando',
      message: '¡La violencia no es buena, pienso entrar a Miyagi Do Karate!'
    });
    this.contacts.push({
      image: 'https://pbs.twimg.com/profile_images/1303857751374704640/-j_HqHsM_400x400.jpg',
      name: 'John Kreese',
      status: 'Ocupado',
      message: 'Yo soy y seré siempre dueño de Cobra Kai'
    });
  }

}
