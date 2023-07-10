export function EpisodeList({episodes}){
    return(
        <>
    {
    episodes && episodes.map((link)=>{
        const numberEpisode = link.split('/').slice(-1);
        return(
            <p>{numberEpisode}</p>
        )

    })
    }
    </>

    )
}
