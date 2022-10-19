import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/129101646_2819388675008042_8861148247199284685_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFpbNhQypdSkqZj_Dj1FVRuTRU60AFUhzFNFTrQAVSHMX7rOW9PAA0pJLgt9B_1THg&_nc_ohc=D88qhai6Yu0AX_9zIxK&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT_o25nMYWFkQTLrma9gqkddPzzFPpTmofLU_CQaK17l5g&oe=63747D52",
    "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/84483490_2567095323570713_4170275844117233664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGv7_OF7tpoD-IWdctsiW21dKFpZd6_iDR0oWll3r-INIfN9K4J5_9tIZegCtV8JLI&_nc_ohc=GCwMXSfd0zcAX8a8yI1&_nc_ht=scontent-xsp1-3.xx&oh=00_AT-AQF9cfs4iOajV2Z1eA9FpX_qDjlZgR_JONCy7ZjhJHg&oe=63749A75",
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/75419053_2482950625318517_4318260741892210688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGRWtSC73eUGV54p1lEDe47KHncRyB693EoedxHIHr3cSDrz07SEMTVl3H7jtWE_l0&_nc_ohc=hVeOtFW-NnwAX-SjAIy&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT9-s-DYOhwrAgsfXhJb56dBMSudmuCABVF4uVkEfwsiYQ&oe=6375A71A",
    "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/69302255_2416393645307549_7765719686313934848_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeESr2YEhv81n_dAfNbU14wGdywgDf8vkdh3LCAN_y-R2DPqsfOiMnuFAlqTYfHsbac&_nc_ohc=8FFGMxznhNwAX8ZuXlT&_nc_oc=AQnXNHOSl6lg9LJf40pSHs1SZHL_DoUgy-RJ8vPZWOMi5eL80S9o6GyrYUT_ndS1pWg&_nc_ht=scontent-xsp1-3.xx&oh=00_AT8e0fdpGyvBVHWK5aofTkX17b6yVagEk3q7U623hoNmxw&oe=63762C2C",
    "https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/68247834_2410346565912257_6818343750146719744_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFf2TFJ0izXmUUSD3XtbCJVzBKcq_UcI-_MEpyr9Rwj7y_tviuIIKSZg4bbClnCRho&_nc_ohc=Tum0vxmFHEYAX9LSRot&_nc_ht=scontent-sin6-4.xx&oh=00_AT9m9DPin424-VoPFu4h1KeU8t0K9v7i0hg1mlQIsHZqyg&oe=637563FE",
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/64594222_2363591110587803_6532956483431170048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHzWbbhOF9ZhvYjuMW-OB_d8vklbu8iv7_y-SVu7yK_v-jQgRIIob1MaNd1pxrQGQo&_nc_ohc=sCH6rn8V5aYAX9wT9PO&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT-cg-DScpfuPuI_mG9gUAItXnxC7VWMEpkut2URMtx1-w&oe=637700AC",
    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/61798463_2359176747695906_8888840117955854336_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFDZiKcgHCHaAIaPnZHYZ2W8uL0PMdKmYTy4vQ8x0qZhMAA1Z70MuTXrMdnCWPTMeg&_nc_ohc=zSR1WVkapcAAX8nFFDC&_nc_ht=scontent-sin6-2.xx&oh=00_AT_QrRT6_iWjFfKKt73w8ffR7TPOiwDxBsQSPTtUtJRkZQ&oe=63759816",
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/60467573_2345362545743993_4928329308344156160_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEYR3yfiIuBx1Z9qWr4KWYF_Hx5tSlivLf8fHm1KWK8t1haad2PMxHp25PCtBx6ZIM&_nc_ohc=KzDD9qva-ZEAX-gwiPe&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT8sGRK-9bdHjVXgbUuSlenwbrLJuJE65yCbCYg5ywvq2g&oe=6377181E",
    "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/61707762_2355841048029476_3977841986198568960_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFmITsulV4jYYW8M1naZu318Gqhwuk_S4zwaqHC6T9LjMNPrXoNlLfn_4SUo-U8eKk&_nc_ohc=B1cPZeQdzbkAX-XUQIe&_nc_ht=scontent.fmnl9-2.fna&oh=00_AT9BYyRvqmiAdMMQ99-cpwC0jC1yCRTfD3IX9v3E8Z0KIw&oe=6374ABC1",



]

export const Gallery = () => {
  return (
    <>

    <h1 className='text-center'>Gallery</h1>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </>
  )
}
