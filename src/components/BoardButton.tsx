import {Button} from '@chakra-ui/react'

function BoardButton(props: {value: String, onClick: () => void}) {
    return (
        <Button className="Board-button" colorScheme='teal' size='lg' onClick={() => props.onClick()}>
            {props.value}
        </Button>
    );
}

// @ts-ignore
export default  BoardButton