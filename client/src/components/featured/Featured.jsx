import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({ type }) {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/1439263/pexels-photo-1439263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
            />
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <span
                    className='desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere eius nostrum eum, dolorum unde officiis? Exercitationem facilis ex minus blanditiis non, dolor, numquam maiores accusamus est nemo, hic nostrum.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
