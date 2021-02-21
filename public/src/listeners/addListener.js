'use strict';

import { submitNewTodo } from '../handlers/newTodo.js';
import {toggleAll} from '../classes/Todo.js';

document.getElementById('todoForm').addEventListener('submit', submitNewTodo);
document
.getElementById("toggle-all")
.addEventListener("click", () => Todo.toggleAll());
