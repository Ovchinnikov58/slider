import React, { FC, useEffect, useState } from 'react'
import './slider.scss'
import { useDispatch, useSelector } from 'react-redux'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import Modal from '../modal/Modal'
import { PostsState, RootState, Post, AppState } from '../../utils/types'
import { changeLoadValue, changeStartValue, setIsModalOpen } from '../../store/actions'

type SliderProps = {
  listLength: number
}

const Slider: FC<SliderProps> = ({ listLength }: SliderProps): JSX.Element => {
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const [list, setList] = useState<Array<Post>>([])

  const { isModalOpen } = useSelector((s: RootState): AppState => s.app)
  const { fetchedPosts, startValue } = useSelector((s: RootState): PostsState => s.posts)
  const dsp = useDispatch()

  useEffect(checkLength, [selectedPhoto])

  useEffect(() => {
    setList([...fetchedPosts].slice(startValue, startValue + listLength))
  }, [startValue])

  return (
    <div className="slider">
      <div className="slider__selected">
        <button className="slider__selected-change-field" type="button" onClick={() => changePhoto('prev')}>
          &nbsp;
        </button>
        <button className="slider__selected-item" type="button" onClick={onSelectedItemHandler}>
          <img src={fetchedPosts[selectedPhoto]?.url} alt={fetchedPosts[selectedPhoto]?.title} />
        </button>
        <button className="slider__selected-change-field" type="button" onClick={() => changePhoto('next')}>
          &nbsp;
        </button>
      </div>
      <div className="slider__list">
        <button type="button" className="slider__btn" onClick={() => changePhoto('prev')}>
          <NavigateBeforeIcon fontSize="large" />
        </button>

        {list.map((post) =>
          post?.url.includes('.jpg') ? (
            <div key={post?.id} className="slider__list-item">
              <img src={post.url} alt={post?.title} />
            </div>
          ) : null,
        )}

        <button type="button" className="slider__btn" onClick={() => changePhoto('next')}>
          <NavigateNextIcon fontSize="large" />
        </button>
      </div>

      {isModalOpen ? <Modal url={fetchedPosts[selectedPhoto]?.url} /> : null}
    </div>
  )

  function changePhoto(value: string): void {
    if (value === 'next') {
      setSelectedPhoto(selectedPhoto + 1)
      dsp(changeStartValue(1))
      dsp(changeLoadValue())
    } else if (selectedPhoto) {
      dsp(changeStartValue(-1))
      setSelectedPhoto(selectedPhoto - 1)
    }
  }

  function checkLength(): void {
    if (selectedPhoto < 0) setSelectedPhoto(0)
  }

  function onSelectedItemHandler() {
    dsp(setIsModalOpen(true))
  }
}

export default Slider
