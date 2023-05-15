import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular'

import Dropdown from 'components/Dropdown'

import * as S from './styles'
import Link from 'next/link'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/account" passHref>
        <S.Link>
          <AccountCircle />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link>
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <Link href="/sign-out" passHref>
        <S.Link>
          <ExitToApp />
          <span>Sign Out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
