const express = require('express');
const app = express();
app.use(express.json());

let lists = [];

app.post('/lists', (req, res) => {
  const { name, id } = req.body;
  if (!name || !id) return res.status(400).json({ error: 'Faltan campos obligatorios' });
  if (lists.some(l => l.id === id)) return res.status(409).json({ error: 'ID duplicado' });
  const newList = { name, id, taskList: [] };
  lists.push(newList);
  res.status(201).json(newList);
});

app.get('/lists', (req, res) => {
  res.json(lists);
});

app.get('/lists/:id', (req, res) => {
  const list = lists.find(l => l.id === req.params.id);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  res.json(list);
});

app.put('/lists/:id', (req, res) => {
  const list = lists.find(l => l.id === req.params.id);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  const { name } = req.body;
  if (name) list.name = name;
  res.json(list);
});

app.delete('/lists/:id', (req, res) => {
  const idx = lists.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Lista no encontrada' });
  const deleted = lists.splice(idx, 1);
  res.json(deleted[0]);
});

app.post('/lists/:listId/tasks', (req, res) => {
  const list = lists.find(l => l.id === req.params.listId);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  const { title, date, description, id } = req.body;
  if (!title || !date || !id) return res.status(400).json({ error: 'Faltan campos obligatorios' });
  if (list.taskList.some(t => t.id === id)) return res.status(409).json({ error: 'ID de tarea duplicado' });
  const newTask = { title, date, description, id };
  list.taskList.push(newTask);
  res.status(201).json(newTask);
});

app.get('/lists/:listId/tasks', (req, res) => {
  const list = lists.find(l => l.id === req.params.listId);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  res.json(list.taskList);
});

app.get('/lists/:listId/tasks/:taskId', (req, res) => {
  const list = lists.find(l => l.id === req.params.listId);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  const task = list.taskList.find(t => t.id === req.params.taskId);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(task);
});

app.put('/lists/:listId/tasks/:taskId', (req, res) => {
  const list = lists.find(l => l.id === req.params.listId);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  const task = list.taskList.find(t => t.id === req.params.taskId);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  const { title, date, description } = req.body;
  if (title) task.title = title;
  if (date) task.date = date;
  if (description) task.description = description;
  res.json(task);
});

app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
  const list = lists.find(l => l.id === req.params.listId);
  if (!list) return res.status(404).json({ error: 'Lista no encontrada' });
  const idx = list.taskList.findIndex(t => t.id === req.params.taskId);
  if (idx === -1) return res.status(404).json({ error: 'Tarea no encontrada' });
  const deleted = list.taskList.splice(idx, 1);
  res.json(deleted[0]);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
