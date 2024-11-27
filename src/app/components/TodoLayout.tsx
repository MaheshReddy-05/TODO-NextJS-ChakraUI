'use client'

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button,Container, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, FormControl, FormLabel, Input, Select, useDisclosure } from '@chakra-ui/react';
import Task from './Task';

const TodoLayout = () => {
    const [tasks, setTasks] = useState({
        1: {
            id: 1,
            task: 'Task 1',
            dueDate: '20-11-2024',
            dueTime: '11:09 AM',
            priority: 'high',
            check: false,
        },
        2: {
            id: 2,
            task: 'Task 2',
            dueDate: '21-11-2024',
            dueTime: '12:00 PM',
            priority: 'medium',
            check: false,
        },
        3: {
            id: 3,
            task: 'Task 3',
            dueDate: '22-11-2024',
            dueTime: '09:30 AM',
            priority: 'low',
            check: false,
        },
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newTask, setNewTask] = useState({
        task: '',
        dueDate: '',
        dueTime: '',
        priority: 'low',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleSubmit = () => {
        const id = uuidv4();
        const newTasks = {
            ...tasks,
            [id]: {
                id,
                ...newTask,
                check: false
            },
        };
        setTasks(newTasks);
        setNewTask({ task: '', dueDate: '', dueTime: '', priority: 'low' });
        onClose();
    };

    const styles = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        color: '#000000',
    };
 
    return (
        <Container style={styles}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="3xl" color="black">Todo</Text>
                <Button colorScheme="teal" onClick={onOpen}>+ Task</Button>
            </Box>

            <Box mt={4}>
                <Task tasks={tasks} />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Task</ModalHeader>
                    <ModalBody>
                        <FormControl id="task" mb={4}>
                            <FormLabel>Task</FormLabel>
                            <Input
                                name="task"
                                value={newTask.task}
                                onChange={handleChange}
                                placeholder="Enter task"
                            />
                        </FormControl>
                        <FormControl id="dueDate" mb={4}>
                            <FormLabel>Due Date</FormLabel>
                            <Input
                                name="dueDate"
                                type="date"
                                value={newTask.dueDate}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="dueTime" mb={4}>
                            <FormLabel>Due Time</FormLabel>
                            <Input
                                name="dueTime"
                                type="time"
                                value={newTask.dueTime}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="priority" mb={4}>
                            <FormLabel>Priority</FormLabel>
                            <Select
                                name="priority"
                                value={newTask.priority}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>Cancel</Button>
                        <Button colorScheme="teal" onClick={handleSubmit}>Add Task</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default TodoLayout;
