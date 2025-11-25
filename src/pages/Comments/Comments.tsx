import React, { useEffect, useState } from "react";
import { Input, Rate, Typography, Flex } from "antd";
import { FaPaperPlane } from "react-icons/fa";
import { CommentCard } from "../../components/CommentCard/CommentCard";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { addComment, fetchComments } from "../../context/RestaurantAction";
import type { CommentRestaurant } from "../../domain/restaurant";
import CommentsStyled from "./Comments.styled";

const { TextArea } = Input;
const { Title } = Typography;

const { PageContainer, CommentForm, CommentsGrid, ButtonStyled } =  CommentsStyled;

export const CommentsPage: React.FC = () => {
  const { state, dispatch } = useRestaurantContext();
  const commentsData = state.comments;

  const [newComment, setNewComment] = useState<CommentRestaurant>({
    author: "",
    content: "",
    rating: 0,
  });

  useEffect(() => {
    const commentsData = async () => {
      await fetchComments(dispatch as any);
    };

    commentsData();
  }, []);

  const handleSubmit = async () => {
    if (!newComment.author || !newComment.content || !newComment.rating) {
      alert("Por favor completa todos los campos y agrega una calificación.");
      return;
    }

    await addComment(newComment, dispatch as any);

    setNewComment({ author: "", content: "", rating: 0 });
  };

  return (
    <PageContainer id="comments">
      <Title level={2} style={{ textAlign: "center", marginBottom: 30 }}>
        Opiniones de nuestros clientes
      </Title>

      <CommentsGrid>
        {commentsData.map(({ author, content, id, rating, createdAt }) => (
          <CommentCard
            author={author}
            content={content}
            rating={rating}
            createdAt={createdAt}
            key={id}
            id={id}
          />
        ))}
      </CommentsGrid>
      <Flex justify="center" align="center" style={{ marginTop: 80 }}>
        <CommentForm>
          <Title level={4}>Deja tu comentario</Title>
          <Input
            placeholder="Tu nombre"
            value={newComment.author}
            onChange={(e) =>
              setNewComment({ ...newComment, author: e.target.value })
            }
            style={{ marginBottom: 10 }}
          />
          <Rate
            value={newComment.rating}
            onChange={(value) =>
              setNewComment({ ...newComment, rating: value })
            }
            style={{ marginBottom: 10 }}
          />
          <TextArea
            rows={3}
            placeholder="Escribe tu comentario..."
            value={newComment.content}
            onChange={(e) =>
              setNewComment({ ...newComment, content: e.target.value })
            }
          />
          <ButtonStyled icon={<FaPaperPlane />} onClick={handleSubmit}>
            Enviar comentario
          </ButtonStyled>
        </CommentForm>
      </Flex>
    </PageContainer>
  );
};
