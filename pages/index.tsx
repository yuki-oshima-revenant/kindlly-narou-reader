// import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import axios from 'axios'
interface Response {
    lines: string[]
}

const Index = () => {
    const fetcher = (url: string) => axios.post(url, { novelId: 'n2267be', pageNumber: 1 }).then(res => res.data);
    const { data } = useSWR<Response>('/api/novelBody', fetcher)

    return (
        <div>
            {data && data.lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    )
}

export default Index;