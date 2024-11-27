import React from 'react';
import { Box, Flex, Text, Button, Grid, useBreakpointValue } from '@chakra-ui/react';

const Task = (props: { tasks: Record<string, any> }) => {
    if (!props.tasks || typeof props.tasks !== 'object') {
        return <Text>No tasks available</Text>;
    }

    return (
        <div>
            {Object.keys(props.tasks).map((key) => {
                const task = props.tasks[key];
                const priorityStyle = {
                    backgroundColor:
                        task.priority === 'high'
                            ? 'var(--high-priority-light)'
                            : task.priority === 'medium'
                            ? 'var(--medium-priority-light)'
                            : 'var(--low-priority-light)',
                    padding: '10px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                };

                return (
                    <Box key={key} style={priorityStyle}>
                        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                            <Box>
                                <Text fontWeight="bold">{task.task}</Text>
                            </Box>
                            <Box>
                                <Text>{task.dueDate}</Text>
                            </Box>
                            <Box>
                                <Text>{task.dueTime}</Text>
                            </Box>
                            <Box>
                                <Flex justify="space-between">
                                    <Button size="sm" variant="outline" colorScheme="green" aria-label="Mark as completed">
                                        ✔
                                    </Button>
                                    <Button size="sm" variant="outline" colorScheme="blue" aria-label="Edit task">
                                        ✎
                                    </Button>
                                    <Button size="sm" variant="outline" colorScheme="red" aria-label="Delete task">
                                        🗑️
                                    </Button>
                                </Flex>
                            </Box>
                        </Grid>
                    </Box>
                );
            })}
        </div>
    );
};

export default Task;
