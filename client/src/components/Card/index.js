import { Button, Image, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import React from 'react'

function Card({ item }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src={item.images[0]} alt='product' style={{ width: "20vw", height: "30vh" }} />

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
            {item.title}
          </Box>

          <Box d="flex" alignItems="baseline">
            {item.category}
          </Box>



          <Box>{item.price + " $"}</Box>

        </Box>

      </Link>

      <Button colorScheme="blackAlpha" >
        Add
      </Button>
    </Box>
  );
}

export default Card
