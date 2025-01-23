import { useState, useContext } from "react";
import {
  Button,
  Modal,
  Input,
  Textarea,
  Avatar,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { useBlogContext } from "@/context/BlogContext";

const BlogComment = () => {
  const { blog } = useBlogContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = () => {};

  return (
    <div className="blog-comment-section mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Display Existing Comments */}
      <div className="comments-list space-y-6">
        {blog?.comments ? (
          blog.comments.map((c, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar
                src={c.avatar || "https://via.placeholder.com/150"}
                alt={c.name}
                size="lg"
              />
              <div>
                <h4 className="font-bold text-lg">{c.name}</h4>
                <p className="text-sm text-gray-500">{c.createdAt}</p>
                <p className="mt-2">{c.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* Add Comment Button */}
      <div className="mt-6">
        <Button onPress={onOpen} color="primary">
          Add Comment
        </Button>
      </div>

      {/* Comment Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h3 className="text-xl font-bold" id="modal-title">
                  Add a Comment
                </h3>
              </ModalHeader>
              <ModalBody>
                <Input
                  fullWidth
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  fullWidth
                  placeholder="Email (optional)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  fullWidth
                  placeholder="Your Comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogComment;
