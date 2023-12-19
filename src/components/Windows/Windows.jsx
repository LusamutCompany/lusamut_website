import WindowCard from "../WindowCard/WindowCard"

function Windows({ selected, setSelected, windowCards, styles }) {
    return (
        <div className={styles.windows} onClick={(e) => { e.preventDefault() }} >
            <div className={styles.absoluteBackground}></div>
            {
                windowCards.map((item, index) => {
                    return (
                        <WindowCard
                            type={item.type}
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