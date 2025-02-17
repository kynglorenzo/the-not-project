import { ServerActionsProvider } from '@/app/contexts/server-actions';
import { getSession } from '@auth0/nextjs-auth0';
import { isUserAdmin } from '../actions/isUserAdmin';
import { redirect } from 'next/navigation';
import NavBar from './components/navbar/navbar.component';
import {
  UpdateUser,
  getCategories,
  createCategory,
  deleteCategory,
  editCategory,
  getUser,
  createStory,
  getStories,
  deleteStory,
  editStory,
  getFilteredStories
} from '../script';
import { AdminContainer } from './components/shared/layout.styles';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const isAdmin = await isUserAdmin();

  if (!isAdmin || !session?.user) {
    redirect('/');
  }

  return (
    <ServerActionsProvider
      getUser={getUser}
      UpdateUser={UpdateUser}
      createCategory={createCategory}
      getCategories={getCategories}
      editCategory={editCategory}
      deleteCategory={deleteCategory}
      createStory={createStory}
      getStories={getStories}
      getFilteredStories={getFilteredStories}
      editStory={editStory}
      deleteStory={deleteStory}
    >
      <AdminContainer>
        <div className='admin-content'>
          <h1>The Not Project - Admin Page</h1>
          <NavBar />
          {children}
        </div>
      </AdminContainer>
    </ServerActionsProvider>
  );
}
