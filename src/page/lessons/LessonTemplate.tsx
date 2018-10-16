
import * as React from 'react';

import Sentences from '../components/Sentences';
import Resources from '../components/Resources';

class LessonTemplate extends React.PureComponent<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { exercises } = this.props;
    return (
      <div className='lessons'>
        <div className='lesson__resources'>
          <h2>Exercise resources</h2>
          <Resources
            
          />
        </div>
        <div className='lessons__sentences'>
          <h2>Lesson Exercises</h2>
          {exercises.map((exercise, index) => (
            <Sentences
              key={index}
              englishSentence={exercise.englishSentence}
              japaneseSentence={exercise.japaneseSentence}
            />
          ))}
        </div>
      </div>
    );
  };
};

export default LessonTemplate;
