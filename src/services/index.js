import axios from "axios";
import { v4 } from 'uuid';

/** axios instance creation */
export const apiClient = axios.create({
  baseURL: '/api'
})

/** uuid instance creation */
export const uuid = v4;

/** vuex pluggins to save the board to localStorage */
export const saveStatePlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('board', JSON.stringify(state.board))
  })
}

/** defaultBoard instance creation */
export const defaultBoard = {
  name: 'workshop',
  columns: [{
      name: 'todo',
      id: uuid(),
      tasks: [{
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      id: uuid(),
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    },
    {
      name: 'done',
      id: uuid(),
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    }
  ]
}