import WindowCard from "../WindowCard/WindowCard"

function Windows({ selected, setSelected, windowCards, styles, forMobile = false }) {
    return (
        <div className={styles.windows + (forMobile ? " "+styles.forMobile : "")}>
            <div className={styles.absoluteBackground}></div>
            {
                windowCards.map((item, index) => {
                    return (
                        <WindowCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            properties={item.properties}
                            isSelected={index === selected ? true : false}
                            index={index}
                            setSelected={setSelected} />
                    )
                })
            }
        </div>
    )
}
export default Windows