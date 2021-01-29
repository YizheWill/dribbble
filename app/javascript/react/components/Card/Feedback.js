import React, { useState, useEffect } from 'react';
import TimeAgo from 'react-timeago';
import {
  fetchShotCommentsAction,
  createShotCommentAction,
  removeShotCommentAction,
  updateShotCommentAction,
} from '../../Actions/CommentActions';
import { getCurrentUserInfo } from '../../Actions/UserActions';
import {
  fade,
  withStyles,
  InputBase,
  makeStyles,
  Avatar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { connect } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  Reply,
  CreateNewFolder,
  Favorite,
  Info,
  Clear,
} from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    float: 'right',
    padding: 20,
    width: 400,
  },
  topButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  topLeftButtons: {
    display: 'flex',
  },
  button: {
    transform: 'scale(0.7)',
    marginLeft: '-0.4rem',
  },
  iconButton: {
    color: '#5f5f5f',
  },
  feedback: {
    marginTop: '2rem',
    paddingLeft: '2rem',
  },
  comments: {
    marginLeft: '1rem',
    marginTop: '1rem',
  },
  commentBox: {
    display: 'flex',
    marginBottom: '1.3rem',
    position: 'relative',
  },
  textButton: {
    cursor: 'pointer',
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    width: '80%',
    marginTop: '-2rem',
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#f1f1f1',
    border: '1px solid #ced4da',
    fontSize: 16,
    height: '10px',
    padding: '10px 12px',
    marginBottom: 10,
    placeholder: 'Share your thoughts...',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.secondary.main,
    },
  },
}))(InputBase);

const CommentItem = ({
  comment,
  updateShotComment,
  removeShotComment,
  userId,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [newComment, setNewComment] = useState(comment.body);
  const [showEdit, setShowEdit] = useState('none');
  const classes = useStyles();
  const [height, setHeight] = useState(1);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const mid = 'comment-box-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mid}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: '1rem' }}
    >
      <MenuItem
        onClick={() => {
          setShowEdit('block');
          handleMenuClose();
        }}
      >
        Edit
      </MenuItem>
      <MenuItem
        onClick={() => {
          removeShotComment(comment.id);
          handleMenuClose();
        }}
      >
        Delete
      </MenuItem>
    </Menu>
  );

  const updateComment = () => {
    console.log('userId', userId);
    const commentBody = {
      user_id: userId,
      shot_id: shotId,
      body: newComment,
    };
    setNewComment('');
    updateComment(commentBody);
  };
  return (
    <div className={classes.commentBox}>
      <Avatar
        src={
          comment.commenterAvatarUrl ||
          'https://res.cloudinary.com/willwang/image/upload/v1607723511/avatar_l9tddb.png'
        }
        style={{ marginRight: '1rem' }}
      />
      <div>
        <div>
          <Typography variant='body2' style={{ fontWeight: 400 }}>
            {comment.commenter}
          </Typography>
          <label>
            <div
              style={{
                position: 'relative',
                display: showEdit,
                marginTop: '1rem',
              }}
            >
              <BootstrapInput
                placeholder='share your thoughts'
                style={{ fontWeight: 100 }}
                className={classes.inputField}
                multiline
                rows={height}
                rowsMax={5}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onFocus={() => setHeight(5)}
                onBlur={() => setHeight(1)}
              />
              <Button
                onMouseDown={() => {
                  updateShotComment({ ...comment, body: newComment });
                  setShowEdit('none');
                }}
                variant='contained'
                color='secondary'
                disabled={!newComment}
                style={{
                  zIndex: 999,
                  display: height === 1 ? 'none' : '',
                  position: 'absolute',
                  bottom: 30,
                  left: 15,
                  fontSize: 7,
                  height: 20,
                  width: 10,
                }}
              >
                Post
              </Button>
            </div>
          </label>
          <div
            style={{
              display: showEdit === 'none' ? 'flex' : 'none',
              position: 'relative',
              flexWrap: 'wrap',
              fontWeight: 100,
              wordBreak: 'break-all',
              width: 200,
            }}
          >
            {comment.body}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '0.3rem',
          }}
        >
          <Typography
            variant='caption'
            style={{ fontWeight: '100', color: '#8f8f8f', marginRight: '1rem' }}
          >
            about <TimeAgo date={comment.createdAt} />
          </Typography>
          {/* <Typography
            className={classes.textButton}
            style={{ marginRight: '1rem' }}
            variant='caption'
          >
            like
          </Typography>
          <Typography variant='caption' className={classes.textButton}>
            reply
          </Typography> */}
        </div>
        {userId === comment.commenterId ? (
          <MoreHoriz
            onClick={handleMenuOpen}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          />
        ) : (
          <div></div>
        )}
        {renderMenu}
      </div>
    </div>
  );
};

function Feedback({
  userId,
  comments,
  fetchShotComments,
  createShotComment,
  fetchCurrentUser,
  updateShotComment,
  removeShotComment,
}) {
  const { shotId } = useParams();
  console.log('shotId', shotId);
  useEffect(() => {
    fetchShotComments(shotId);
    fetchCurrentUser(window.localStorage.getItem('sessionToken'));
  }, []);
  console.log('comments', comments);
  const classes = useStyles();
  const [height, setHeight] = useState(1);
  const [newComment, setNewComment] = useState('');
  console.log('userId', userId);
  const submitComment = () => {
    console.log('userId', userId);
    const commentBody = {
      user_id: userId,
      shot_id: shotId,
      body: newComment,
    };
    setNewComment('');
    createShotComment(commentBody);
  };
  return (
    <div className={classes.root}>
      <div className={classes.topButtons}>
        <div className={classes.topLeftButtons}>
          <Button variant='outlined' className={classes.button}>
            <Reply
              className={classes.iconButton}
              style={{ transform: 'scaleX(-1)' }}
            />
          </Button>
          <Button variant='outlined' className={classes.button}>
            <CreateNewFolder className={classes.iconButton} />
          </Button>
          <Button variant='outlined' className={classes.button}>
            <Favorite className={classes.iconButton} />
          </Button>
        </div>
        {/* TODO */}
        {/* <Button style={{ transform: 'scale(0.7)' }} variant='outlined'>
          <Info className={classes.iconButton} /> details
        </Button> */}
      </div>
      <div className={classes.feedback}>
        <label>
          <Typography variant='h6' style={{ marginBottom: 20 }}>
            Feedback
          </Typography>
          <div style={{ position: 'relative' }}>
            <BootstrapInput
              placeholder='share your thoughts'
              style={{ fontWeight: '100' }}
              className={classes.inputField}
              multiline
              rows={height}
              rowsMax={5}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onFocus={() => setHeight(5)}
              onBlur={() => setHeight(1)}
            />
            <Button
              onMouseDown={submitComment}
              variant='contained'
              color='secondary'
              disabled={!newComment}
              style={{
                zIndex: 999,
                display: height === 1 ? 'none' : '',
                position: 'absolute',
                bottom: 30,
                left: 15,
                fontSize: 7,
                height: 20,
                width: 10,
              }}
            >
              Post
            </Button>
          </div>
        </label>
      </div>
      <div className={classes.comments}>
        {Object.values(comments)?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            updateShotComment={updateShotComment}
            removeShotComment={removeShotComment}
            userId={userId}
          />
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state, ownProps) => ({
    comments: state.entities.shotcomments,
    userId: state.user.id,
    toggleDrawer: ownProps.toggleDrawer,
  }),
  (dispatch) => ({
    fetchCurrentUser: (sessionToken) =>
      dispatch(getCurrentUserInfo(sessionToken)),
    fetchShotComments: (shotId) => dispatch(fetchShotCommentsAction(shotId)),
    createShotComment: (comment) => dispatch(createShotCommentAction(comment)),
    removeShotComment: (commentId) =>
      dispatch(removeShotCommentAction(commentId)),
    updateShotComment: (comment) => dispatch(updateShotCommentAction(comment)),
  })
)(Feedback);
