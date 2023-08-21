import gql from 'graphql-tag';

export const GET_QUIZ_LIST = gql`
  query GetActiveQuiz {
    getActiveQuiz {
      id
      quiz_questions
      correct_answers
      opening_date_time
      closing_date_time
      user_id
      answer_id
      quiz_answers
      is_active
      created_by
      created_date
      updated_by
      updated_date
      remarks
      isAnswered
    }
  }
`;
export const GET_QUIZ_RESULT = gql`
  query ResultQuiz {
    resultQuiz {
      id
      answer_id
      title
      totalQuizPoints
      InTotalQuizPoints
      questionsWithAnswer {
        number
        answers
        question
        is_correct
        correct_answerIndex
        given_answerIndex
        quizPoints
      }
    }
  }
`;
